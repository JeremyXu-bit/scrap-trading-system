<template>
  <div class="dashboard-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="废品名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入废品名称" />
      </el-form-item>
      <el-form-item label="总量" prop="totals">
        <!-- <el-input v-model="form.totals" /> -->
        <el-input v-model="form.totals" placeholder="请输入数量" type="number">
          <template slot="append">KG</template>
        </el-input>
      </el-form-item>
      <el-form-item label="发布人" prop="releaser">
        <el-input v-model="form.releaser" placeholder="请输入名字" />
      </el-form-item>
      <el-form-item label="联系方式" prop="contacter">
        <el-input v-model="form.contacter" maxlength="11" onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="请输入联系方式" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认发布</el-button>
        <el-button @click="onCancel">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  // computed: {
  //   ...mapGetters([
  //     'name'
  //   ])
  // },
  data() {
    return {
      form: {
        name: '',
        totals: '',
        releaser: '',
        contacter: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('提交成功!')
    },
    onCancel() {
      // this.$message({
      //   message: 'cancel!',
      //   type: 'warning'
      // })
      this.$refs.form.resetFields()
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
.line {
  text-align: center;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
} /* chrome */

input[type="number"] {
  -moz-appearance: textfield; /* firefox */
}
</style>
