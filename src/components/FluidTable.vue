<template>
  <div class="fluid-table-container">
    <el-table
      ref="table"
      :data="tableData"
      border
      stripe
      :span-method="objectSpanMethod"
      :header-cell-style="headerCellStyle"
      @row-click="handleRowClick"
      style="width: 100%"
      size="small"
    >
      <el-table-column
        v-for="(col, index) in columns"
        :key="col.key"
        :prop="col.key"
        :label="col.label"
        :width="col.width"
        :min-width="col.minWidth"
        :fixed="index < 4 ? 'left' : false"
      >
        <template #default="{ row, $index }">
          <!-- Select 下拉搜索列 -->
          <template v-if="col.key === 'usage' || col.key === 'code'">
            <div @click.stop style="width: 100%">
              <el-select
                v-model="row[col.key]"
                filterable
                clearable
                size="mini"
                style="width: 100%"
              >
                <el-option
                  v-for="opt in getSelectOptions(col.key, row.category)"
                  :key="opt"
                  :label="opt"
                  :value="opt"
                >
                  <el-tooltip
                    v-if="col.key === 'code' && codeUsageMap[opt]"
                    :content="codeUsageMap[opt]"
                    placement="right"
                    :open-delay="300"
                    :hide-after="2000"
                  >
                    <span style="display:block;width:100%">{{ opt }}</span>
                  </el-tooltip>
                  <span v-else>{{ opt }}</span>
                </el-option>
              </el-select>
            </div>
          </template>
          <!-- 普通文本列 -->
          <template v-else>
            <span class="cell-text">{{ row[col.key] }}</span>
          </template>
        </template>
      </el-table-column>
    </el-table>

    <!-- 编辑范围弹窗 -->
    <el-dialog
      :title="'编辑 — ' + currentRow.name + ' (' + currentRow.code + ')'"
      :visible.sync="dialogVisible"
      width="680px"
      top="5vh"
      :close-on-click-modal="false"
    >
      <el-form label-width="140px" size="small">
        <el-form-item
          v-for="field in rangeFields"
          :key="field.key"
          :label="field.label"
        >
          <div class="range-input-group">
            <el-input v-model="editForm[field.key].min" placeholder="最小值" style="width: 200px" />
            <span class="range-sep">~</span>
            <el-input v-model="editForm[field.key].max" placeholder="最大值" style="width: 200px" />
            <span class="range-unit" v-if="field.unit">{{ field.unit }}</span>
          </div>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="saveEdit">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import rawData from '../data/fluidList.json'

export default {
  name: 'FluidTable',

  data() {
    return {
      columns: rawData.headers,
      tableData: rawData.data.map((row, idx) => ({
        ...row,
        _idx: idx
      })),
      mergedInfo: rawData.mergedInfo,
      mergedMap: {},
      dialogVisible: false,
      currentRow: {},
      editForm: {},
      rangeFields: [
        { key: 'opTemp', label: '操作温度', unit: '°C' },
        { key: 'opPressure', label: '操作压力', unit: 'kPa(g)' },
        { key: 'density', label: '密度', unit: 't/m³' },
        { key: 'solidContent', label: '固体含量', unit: '% w/w' },
        { key: 'particleSize', label: '标称粒径D50', unit: '微米' },
        { key: 'phRange', label: 'pH值范围', unit: '' },
        { key: 'chlorideConc', label: '氯化物浓度', unit: 'mg/L' }
      ]
    }
  },

  created() {
    // Build merged cell lookup map by row index
    this.mergedInfo.forEach(info => {
      this.mergedMap[info.rowIndex] = {
        rowspan: info.rowspan,
        isFirst: info.isFirst
      }
    })
  },

  computed: {
    codeUsageMap() {
      const map = {}
      this.tableData.forEach(row => {
        if (row.code && row.usage) {
          map[row.code] = row.usage
        }
      })
      return map
    }
  },

  methods: {
    headerCellStyle() {
      return {
        background: '#e8edf2',
        color: '#303133',
        fontWeight: '600',
        fontSize: '12px',
        whiteSpace: 'pre-line',
        textAlign: 'center',
        padding: '6px 4px',
        lineHeight: '1.4'
      }
    },

    objectSpanMethod({ rowIndex, columnIndex }) {
      if (columnIndex === 1) {
        const info = this.mergedMap[rowIndex]
        if (info) {
          return info.isFirst ? { rowspan: info.rowspan, colspan: 1 } : { rowspan: 0, colspan: 0 }
        }
      }
      return { rowspan: 1, colspan: 1 }
    },

    getSelectOptions(colKey, category) {
      if (!category) return []
      // Get unique values from rows in the same category
      const options = new Set()
      this.tableData.forEach(row => {
        if (row.category === category && row[colKey]) {
          options.add(row[colKey])
        }
      })
      return Array.from(options).sort()
    },

    handleRowClick(row) {
      this.currentRow = row
      this.editForm = {}
      this.rangeFields.forEach(field => {
        const parsed = this.parseRange(row[field.key])
        this.editForm[field.key] = {
          min: parsed.min,
          max: parsed.max
        }
      })
      this.dialogVisible = true
    },

    parseRange(val) {
      if (!val && val !== 0) return { min: '', max: '' }
      const str = String(val).trim()
      // Handle special values that aren't ranges
      if (/^(无此项|不适用|不适用\/无此项|N\/A|TBC|变量|根据物料平衡|-)$/.test(str)) {
        return { min: str, max: '' }
      }
      // Try to extract numeric range: "25~100" or "25~100 根据物料平衡" or "1.0-1.2" or "<2"
      // Match range with ~ or -
      let m = str.match(/^([\d.]+)\s*[~～-]\s*([\d.]+)/)
      if (m) {
        return { min: m[1], max: m[2] }
      }
      // Handle "<2", ">8" style
      m = str.match(/^([<>≤≥])\s*([\d.]+)/)
      if (m) {
        return { min: m[1] + m[2], max: '' }
      }
      // If it's just a number
      if (/^-?[\d.]+$/.test(str)) {
        return { min: str, max: str }
      }
      // Fallback: return raw value in min
      return { min: str, max: '' }
    },

    buildRangeString(field) {
      const { min, max } = this.editForm[field.key]
      if (!min && !max) return field.key === 'phRange' || field.key === 'chlorideConc' ? '' : ''
      if (min && !max) return min
      if (min && max && min === max) return min
      if (min && max && min !== max) return min + '~' + max
      if (!min && max) return max
      return ''
    },

    saveEdit() {
      this.rangeFields.forEach(field => {
        const newVal = this.buildRangeString(field)
        if (newVal) {
          this.$set(this.currentRow, field.key, newVal)
        }
      })
      this.dialogVisible = false
      this.$message.success('保存成功')
    }
  }
}
</script>

<style scoped>
.fluid-table-container {
  padding: 16px;
}

.cell-text {
  font-size: 12px;
  white-space: pre-line;
  word-break: break-all;
}

::v-deep .el-table {
  font-size: 12px;
}

::v-deep .el-table th {
  padding: 6px 0;
}

::v-deep .el-table td {
  padding: 4px 0;
}

::v-deep .el-table .cell {
  padding: 2px 6px;
  line-height: 1.5;
}

::v-deep .el-table__body tr {
  cursor: pointer;
}

::v-deep .el-table__body tr:hover > td {
  background-color: #e6f0fa !important;
}

::v-deep .el-select .el-input__inner {
  font-size: 12px;
  height: 28px;
  line-height: 28px;
}

.range-input-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.range-sep {
  color: #909399;
  font-weight: bold;
  flex-shrink: 0;
}

.range-unit {
  color: #909399;
  font-size: 12px;
  flex-shrink: 0;
  margin-left: 4px;
}
</style>
