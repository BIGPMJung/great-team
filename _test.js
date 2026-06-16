
// ===== 工具函数 =====
function parseRangeVal(v) {
  if (v === null || v === undefined || v === '') return ['', ''];
  var s = String(v).trim();
  if (/^(无此项|不适用|不适用\/无此项|N\/A|TBC|变量|根据物料平衡|-)$/.test(s))
    return [s, ''];
  var m = s.match(/^([\d.]+)\s*[~～\-]\s*([\d.]+)/);
  if (m) return [m[1], m[2]];
  m = s.match(/^([<>≤≥])\s*([\d.]+)/);
  if (m) return [m[1] + m[2], ''];
  if (/^-?[\d.]+$/.test(s)) return [s, s];
  return [s, ''];
}

function buildRangeVal(parts) {
  var min = parts[0], max = parts[1];
  if (!min && !max) return '';
  if (min && !max) return min;
  if (min && max && min === max) return min;
  if (min && max) return min + '~' + max;
  if (!min && max) return max;
  return '';
}

function formatCmpDisplay(v) {
  if (!v) return '';
  var s = String(v).trim();
  var m = s.match(/^([<>])\s*(\d+\.?\d*)/);
  if (m) {
    var cls = m[1] === '<' ? 'cmp-tag' : 'cmp-tag gt';
    return '<span class="' + cls + '">' + m[1] + ' ' + m[2] + '</span>';
  }
  return s;
}

// ===== 组件：文本悬停编辑 =====
Vue.component('text-cell', {
  template: '<div class="hover-cell text" :class="[{ focused: editing }, long ? \'long\' : \'\']">' +
    '<span class="display-text">{{ displayText }}</span>' +
    '<div class="edit-layer">' +
      '<input v-if="!long" v-model="txt" @focus="editing=true" @blur="onBlur" @keyup.enter="done" ref="inp" />' +
      '<textarea v-if="long" v-model="txt" @focus="editing=true" @blur="onBlur" ref="inp" rows="3"></textarea>' +
    '</div></div>',
  props: ['row', 'field', 'long'],
  data: function() {
    return { txt: this.row[this.field] || '', editing: false };
  },
  computed: {
    displayText: function() {
      var v = this.row[this.field];
      return v || '';
    }
  },
  watch: {
    'row[field]': function(v) { this.txt = v || ''; }
  },
  methods: {
    commit: function() { this.$set(this.row, this.field, this.txt); },
    onBlur: function() {
      var self = this;
      setTimeout(function() {
        if (!self.$el.contains(document.activeElement)) { self.editing = false; self.commit(); }
      }, 120);
    },
    done: function() { this.editing = false; this.commit(); }
  }
});

// ===== 组件：范围悬停编辑 =====
Vue.component('range-cell', {
  template: '<div class="hover-cell range" :class="{ focused: editing }">' +
    '<span class="display-text" v-html="displayHtml"></span>' +
    '<div class="edit-layer">' +
      '<input v-model="minVal" @focus="editing=true" @blur="onBlur" @keyup.enter="done" ref="minInp" />' +
      '<span class="sep" v-show="rangeMode">~</span>' +
      '<input v-model="maxVal" @focus="editing=true" @blur="onBlur" @keyup.enter="done" ref="maxInp" v-show="rangeMode" />' +
      '<span class="toggle-icon" @mousedown.prevent @click.stop="toggle" :title="rangeMode ? \'切换为单值\' : \'切换为范围\'">{{ rangeMode ? "⇆" : "⇄" }}</span>' +
    '</div></div>',
  props: ['row', 'field'],
  data: function() {
    var parts = parseRangeVal(this.row[this.field]);
    return {
      minVal: parts[0], maxVal: parts[1],
      rangeMode: !!(parts[0] !== '' && parts[1] !== ''),
      editing: false
    };
  },
  computed: {
    displayHtml: function() {
      var v = this.row[this.field];
      if (v === null || v === undefined || v === '') return '';
      return formatCmpDisplay(String(v));
    }
  },
  watch: {
    'row[field]': function(newVal) {
      var parts = parseRangeVal(newVal);
      this.minVal = parts[0]; this.maxVal = parts[1];
      this.rangeMode = !!(parts[0] !== '' && parts[1] !== '');
    }
  },
  methods: {
    commit: function() { this.$set(this.row, this.field, buildRangeVal([this.minVal, this.maxVal])); },
    onBlur: function() {
      var self = this;
      setTimeout(function() {
        if (!self.$el.contains(document.activeElement)) { self.editing = false; self.commit(); }
      }, 120);
    },
    done: function() { this.editing = false; this.commit(); },
    toggle: function() {
      this.rangeMode = !this.rangeMode;
      if (!this.rangeMode) this.maxVal = '';
      this.commit();
      var self = this;
      this.$nextTick(function() { self.$refs.minInp.focus(); });
    }
  }
});

// ===== 主实例 =====
new Vue({
  el: '#app',
  data: function() {
    var rows = FLUID_DATA.map(function(r, i) { r._idx = i; if (!r.id && r.id !== 0) r.id = i + 1; return r; });
    return { tableData: rows };
  },
  computed: {
    corrosiveOpts: function() {
      var set = {};
      this.tableData.forEach(function(r) { if (r.corrosive) set[r.corrosive] = true; });
      return Object.keys(set).sort();
    },
    usageOpts: function() {
      var set = {};
      this.tableData.forEach(function(r) { if (r.usage) set[r.usage] = true; });
      return Object.keys(set).sort();
    },
    codeOpts: function() {
      var set = {};
      this.tableData.forEach(function(r) { if (r.code) set[r.code] = true; });
      return Object.keys(set).sort();
    }
  },
  methods: {
    spanMethod: function(opts) {
      if (opts.columnIndex !== 1) return [1, 1];
      var row = this.tableData[opts.rowIndex];
      if (!row._merge) return [1, 1];
      return row._mergeFirst ? [row._mergeSpan, 1] : [0, 0];
    },
    delRow: function(idx) {
      var self = this;
      this.$confirm('确认删除该行？', '提示', { type: 'warning', confirmButtonText: '删除', cancelButtonText: '取消' }).then(function() {
        self.tableData.splice(idx, 1);
        self.$message.success('已删除');
      }).catch(function() {});
    },
    addRow: function() {
      var maxId = 0;
      this.tableData.forEach(function(r) { if (r.id && r.id > maxId) maxId = r.id; });
      this.tableData.push({
        _idx: this.tableData.length, _merge: false, _mergeSpan: 1, _mergeFirst: true,
        id: maxId + 1, category: '', usage: '', code: '', pfdNo: '',
        opTemp: '', opPressure: '', density: '', solidContent: '',
        particleSize: '', phRange: '', chlorideConc: '',
        flammable: '', corrosive: '', remark: '', name: '', location: ''
      });
      this.$message.success('已新增空行');
    }
  }
});
