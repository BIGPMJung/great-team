<template>
  <div id="app">
    <div class="header">
      <div class="title-row">
        <h1>NEO ENERGY GREEN NICKEL PROJECT</h1>
        <span class="subtitle">工艺介质表</span>
      </div>
      <div class="doc-row">
        <span class="label">文件编号</span>
        <span class="value">1140-000-LIS-PR-001</span>
      </div>
    </div>
    <FluidTable />
  </div>
</template>

<script>
import FluidTable from './components/FluidTable.vue'

export default {
  name: 'App',
  components: { FluidTable }
}
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: #f5f7fa; font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif; }
#app { max-width: 100%; overflow-x: auto; }

.header {
  background: linear-gradient(135deg, #1a3a5c 0%, #2d6aa0 100%);
  color: #fff;
  padding: 20px 32px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.title-row h1 { font-size: 20px; font-weight: 600; letter-spacing: 2px; }
.title-row .subtitle { font-size: 14px; opacity: 0.85; margin-left: 16px; }
.doc-row .label { font-size: 13px; opacity: 0.7; margin-right: 8px; }
.doc-row .value { font-size: 14px; }
</style>
