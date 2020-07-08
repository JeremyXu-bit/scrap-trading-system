<template>
  <div class="register-container">
    <h1 style="text-align:center;font-weight: 300;">账号注册</h1>
    <el-form ref="registerForm" :model="registerForm" status-icon :rules="rules" label-width="100px" class="demo-registerForm">
      <el-form-item label="商户类型" prop="region">
        <el-select v-model="registerForm.region" placeholder="请选择商户类型" style="width: 100%;">
          <el-option label="供应商" value="supplier" />
          <el-option label="商户" value="merchants" />
          <el-option label="个人" value="personal" />
        </el-select>
      </el-form-item>
      <el-form-item label="账号" prop="account">
        <el-input v-model="registerForm.account" placeholder="请输入手机号码" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="registerForm.code" placeholder="请输入验证码">
          <template slot="append">
            <el-button slot="right" :disabled="isDisabled" type="success" @click.native="getCode">{{ registerForm.codeText }}</el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model.number="registerForm.pass" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input v-model="registerForm.checkPass" type="password" autocomplete="off" placeholder="请再次输入密码" />
      </el-form-item>
      <el-form-item label="图形验证码" prop="imgCode">
        <el-input v-model="registerForm.imgCode" placeholder="请输入图形验证码" class="imgCode">
          <template slot="append" @click="refreshCode">
            <s-identify :identify-code="identifyCode" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-row :gutter="20">
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <el-button style="width: 100%;" @click="resetForm('registerForm')">重置</el-button>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <el-button type="primary" style="width: 100%;" @click="submitForm('registerForm')">提交</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>

import SIdentify from '../../components/identify/index'
export default {

  components: { SIdentify },

  data() {
    var validateAccount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'))
      }
      setTimeout(() => {
        // if (!Number.isInteger(value)) {
        //   callback(new Error('请输入数字值'))
        // } else {
        const myreg = /^[1][3,4,5,7,8][0-9]{9}$/
        if (!myreg.test(value)) {
          callback(new Error('请输入正确的手机号码'))
        } else {
          callback()
        }
        // }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.registerForm.checkPass !== '') {
          this.$refs.registerForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      // alert(value)
      if (value === '') {
        callback(new Error('请再次输入密码'))
      // } else if (value !== this.registerForm.pass) {
      //   callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    var validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      // } else if (value !== '0000') {
      //   callback(new Error('验证码错误!'))
      } else {
        callback()
      }
    }
    var validateImgCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入图形验证码'))
      // } else if (value !== '0000') {
      //   callback(new Error('验证码错误!'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        account: '',
        code: '',
        pass: '',
        checkPass: '',
        imgCode: '',
        codeText: '获取验证码',
        identifyCode: '',
        identifyCodes: '1234567890abcdefghijklmnopqrstuvwxyz'
      },
      isdisabled: false,
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        account: [
          { validator: validateAccount, trigger: 'blur' }
        ],
        code: [
          { validator: validateCode, trigger: 'blur' }
        ],
        imgCode: [
          { validator: validateImgCode, trigger: 'blur' }
        ]
      },
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: ''
    }
  },
  mounted() {
    this.refreshCode()
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
  methods: {
    submitForm(registerForm) {
      this.$refs[registerForm].validate((valid) => {
        if (valid) {
          this.$router.push({ path: '/login' })
        } else {
          console.log('error submit!!')
          return false
        }
      })
      // this.$router.push({ path: '/' })
    },
    resetForm(registerForm) {
      this.$refs[registerForm].resetFields()
    },
    getCode(e) {
      console.log('获取验证码')
      this.setTime()
	  },
	  setTime() {
      let time = 60
      let i = 0
      const that = this
      // 1.在60秒之内，button上倒计时60秒，并显示
      // 2.向controller请求验证码，并发送到指定的手机号上面
      setInterval(function() {
        that.codeText = (--time) + '秒后重发'
        i++
        // 此变量用于标识只调用一次获取验证码的函数
        if (i === 1) {
          console.log('get code start1 ... ')
          // 使获取验证码按钮不可点击
          that.isDisabled = true
          that.getVerificationCode()
        }
      }, 1000)

      // 60秒之后需要做的事情
      setTimeout(function() {
        // 恢复获取验证码按钮可点击
        that.isDisabled = false
        that.codeText = '获取验证码'
        clearInterval(setInterval)// 清除计时器
      }, time * 1000) // 60000
	  },
	  getVerificationCode() {
	  	// 向服务器获取验证码
		  console.log('get code start2 ... ')
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.register-container{
    position: relative;
    width: 680px;
    max-width: 100%;
    padding: 40px 20px 10px;
    margin: 0 auto;
    overflow: hidden;
}
.demo-registerForm{
    padding: 40px 50px 30px 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px #ccc;
}
.imgCode{
  .el-input-group__append{
    padding: 0
  }
}
</style>
