<template>
  <div class="dashboard-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="角色">
        <!-- <el-input v-model="form.roles"></el-input> -->
        <template>
          <el-select v-model="roles" placeholder="角色" style="width:100%;">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
      </el-form-item>
      <el-form-item label="账号">
        <el-input v-model="form.account" />
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="form.tel" />
      </el-form-item>
      <el-form-item>
        <el-button
          v-loading.fullscreen.lock="fullscreenLoading"
          style="float: right;"
          type="primary"
          plain
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
      value: ''
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
