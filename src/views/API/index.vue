<template>
  <div class="dashboard-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="公司名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="联系人">
        <el-input v-model="form.account" />
      </el-form-item>
      <el-form-item label="APP ID">
        <el-input v-model="form.AppId" />
      </el-form-item>
      <el-form-item label="APP Key">
        <el-input v-model="form.AppKey" />
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
        <el-table-column prop="ApiKey" label="API Key" />
        <el-table-column label="操作" width="100">
          <template>
            <el-button type="text" size="small">详情</el-button>
            <el-button type="text" size="small">删除</el-button>
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
