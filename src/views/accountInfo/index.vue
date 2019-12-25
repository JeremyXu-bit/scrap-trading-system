<template>
  <div class="dashboard-container">
    <el-table border :data="tableData" style="width: 100%">
      <el-table-column prop="account" label="账号" />
      <el-table-column prop="state" label="状态" />
      <el-table-column prop="type" label="所属类型" />
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
}
#infoTable {
  width: 100%;
}
#infoTable th {
  width: 200px;
  text-align: right;
  padding-right: 20px;
  font-weight: bolder;
  line-height: 40px;
}
</style>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          account: '195679807654',
          type: '供应商',
          state: '已认证'
        }
      ]
    }
  }
}
</script>
