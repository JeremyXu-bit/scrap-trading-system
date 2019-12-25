<template>
  <div class="dashboard-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="公司名称">
        <el-input v-model="form.name" placeholder="请输入公司名称" />
      </el-form-item>
      <el-form-item label="联系人">
        <el-input v-model="form.account" placeholder="请输入联系人名称" />
      </el-form-item>
      <el-form-item label="APP ID">
        <el-input v-model="form.AppId" placeholder="请输入ID" />
      </el-form-item>
      <el-form-item label="API Key">
        <el-input v-model="form.AppKey" placeholder="请输入Key" />
      </el-form-item>
      <el-form-item>
        <el-button
          v-loading.fullscreen.lock="fullscreenLoading"
          type="primary"
          style="float: right;"
        >搜索</el-button>
        <el-button
          v-loading.fullscreen.lock="fullscreenLoading"
          type="primary"
          style="float: right;margin-right:20px"
          @click="open"
        >新增</el-button>
      </el-form-item>
    </el-form>
    <template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="申请时间" />
        <el-table-column prop="name" label="公司名称" />
        <el-table-column prop="contact" label="联系人" />
        <el-table-column prop="tel" label="联系电话" />
        <el-table-column prop="AppId" label="APP ID" />
        <el-table-column prop="AppId" label="API Key" />
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small">详情</el-button>
            <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fullscreenLoading: false,
      roles: '',
      form: {
        account: '',
        name: '',
        tel: ''
      },
      options: [
        {
          value: '选项1',
          label: '运营'
        },
        {
          value: '选项2',
          label: '客服'
        }
      ],
      value: '',
      tableData: [
        {
          date: '2016-05-02',
          name: '上海化工',
          contact: '王小虎',
          tel: '18565805967',
          AppId: 'SH0087',
          ApiKey: 'evxvxW4nfgffc'
        },
        {
          date: '2016-05-02',
          name: '上海化工',
          contact: '王小虎',
          tel: '18565805967',
          AppId: 'SH0087',
          ApiKey: 'evxvxW4nfgffc'
        }
      ]
    }
  },
  methods: {
    open() {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
        this.$message({
          message: '添加成功！',
          type: 'success'
        })
      }, 2000)
    },
    handleClick(row) {
      console.log(row)
    },
    // addRow() {
    //   this.tableData.push({
    //     date: '',
    //     name: '',
    //     contact: '',
    //     tel: '',
    //     AppId: '',
    //     ApiKey: ''
    //   })
    // },
    deleteRow(index, rows) { // 删除改行
      this.fullscreenLoading = true
      setTimeout(() => {
        rows.splice(index, 1)
        this.fullscreenLoading = false
        this.$message({
          message: '删除成功！',
          type: 'success'
        })
      }, 2000)
    }
  }
}
</script>
<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
}
</style>
