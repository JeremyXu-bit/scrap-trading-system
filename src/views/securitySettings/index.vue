<template>
  <div class="dashboard-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="设置密码">
        <el-input v-model="form.psw" />
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form.psw2" />
      </el-form-item>
      <el-form-item>
        <el-button
          v-loading.fullscreen.lock="fullscreenLoading"
          type="primary"
          style="float: right;"
          @click="open"
        >确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fullscreenLoading: false,
      form: {
        psw: '',
        psw2: ''
      }
    }
  },
  methods: {
    open() {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
        this.$message({
          message: '密码修改成功！',
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
