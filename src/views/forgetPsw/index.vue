<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6" style="padding: 30px;
                                        border-radius: 10px;
                                        margin-top: 120px;
                                        border: 1px solid #dedede;">
      <div class="grid-content bg-purple">
        <h3 style="text-align: center;font-weight: lighter;">密码找回</h3>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="请输入手机号" prop="tel">
            <el-input type="text" v-model="ruleForm.tel" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="短信验证码" prop="code">
            <el-input type="text" v-model="ruleForm.code" autocomplete="off">
              <template slot="append"><el-button @click="getMsgCode" id="getMsgCode" :disabled="isDisabledFn" v-text="btnText"></el-button></template>
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item style="text-align: right;">
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      var validateTel = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else {
          if (this.ruleForm.validateTel !== '') {
            // this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var checkCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else {
          if (this.ruleForm.checkCode !== '') {
            // this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        isDisabledFn:false,
        btnText:'获取验证码',
        time:60,
        ruleForm: {
          tel: '',
          pass: '',
          checkPass: '',
          code: ''
        },
        rules: {
          tel: [{
            validator: validateTel,
            trigger: 'blur'
          }],
          pass: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          checkPass: [{
            validator: validatePass2,
            trigger: 'blur'
          }],
          code: [{
            validator: checkCode,
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      submitForm(ruleForm) {
        this.$refs[ruleForm].validate((valid) => {
              if (valid) {
                // this.$store.dispatch('user/login', this.loginForm).then(() => {
                //     this.$router.push({
                //       path: '/login'
                //     })
                //   })
                this.$router.push({
                    path: '/login'
                  })
                }
                else {
                  console.log('error submit!!');
                  return false;
                }
              });
          },
          resetForm(ruleForm) {
            this.$refs[ruleForm].resetFields();
          },
          getMsgCode(){
            let me = this;
            me.isDisabledFn = true;
            let interval = window.setInterval(function() {
						me.btnText =  me.time + '秒后重新发送';
						--me.time;
						if(me.time < 0) {
							me.btnText = "重新发送";
							me.time = 60;
							me.isDisabledFn = false;
							window.clearInterval(interval);
						}
					}, 1000);
          }
      }
    }

</script>
