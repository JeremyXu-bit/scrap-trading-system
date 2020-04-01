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
        <el-button v-loading.fullscreen.lock="fullscreenLoading" type="primary" plain style="float: right;" @click="dialogFormVisible = true">新增</el-button>
        <el-button v-loading.fullscreen.lock="fullscreenLoading" type="primary" plain style="float: right;margin-right:20px">
          搜索</el-button>
      </el-form-item>
    </el-form>
    <template>
      <el-table :data="tableData" border style="width: 100%">
        <!-- 动态循环的列表 -->
        <template v-for="(item, index) in tableLabel">
          <el-table-column :key="index" :prop="item.prop" :label="item.label" width="">
          </el-table-column>
        </template>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">详情</el-button>
            <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <template>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="addAPIForm" ref="addAPIForm" autocomplete="off" :rules="addAPIForm">
          <el-form-item label="公司名称" :label-width="formLabelWidth" prop="name">
            <el-input v-model="addAPIForm.name" placeholder="请输入公司名称"></el-input>
          </el-form-item>
          <el-form-item label="联系人" :label-width="formLabelWidth" prop="containerName">
            <el-input v-model="addAPIForm.containerName" placeholder="请输入联系人名字"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" :label-width="formLabelWidth" prop="tel">
            <el-input v-model="addAPIForm.tel" placeholder="请输入联系电话"></el-input>
          </el-form-item>
          <el-form-item label="对接系统名称" :label-width="formLabelWidth" prop="sys">
            <el-input v-model="addAPIForm.sys" placeholder="请输入对接系统名称"></el-input>
          </el-form-item>
          <el-form-item label="备注" :label-width="formLabelWidth" prop="notes">
            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容（不超过500字）" v-model="addAPIForm.notes">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="close">取 消</el-button>
          <el-button type="primary" @click="addRow">确 定</el-button>
        </div>
      </el-dialog>
    </template>
  </div>
</template>
<script>
  export default {
    data() {
      const name = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('公司名称不能为空！'))
        } else {
          callback()
        }
      }
      const containerName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('联系人不能为空！'))
        } else {
          callback()
        }
      }
      const tel = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('联系电话不能为空！'))
        } else {
          callback()
        }
      }
      const sys = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('公司名称不能为空！'))
        } else {
          callback()
        }
      }
      return {
        dialogTableVisible: false,
        fullscreenLoading: false,
        dialogFormVisible: false,
        addAPIForm: {
          name: [{
            required: true,
            trigger: 'blur',
            validator: name
          }],
          containerName: [{
            required: true,
            trigger: 'blur',
            validator: containerName
          }],
          tel: [{
            required: true,
            trigger: 'blur',
            validator: tel
          }],
          sys: [{
            required: true,
            trigger: 'blur',
            validator: sys
          }],
        },
        roles: '',
        form: {
          account: '',
          name: '',
          tel: ''
        },
        addAPIForm: {
          name: '',
          containerName: '',
          tel: '',
          sys: ''
        },
        formLabelWidth: '120px',
        options: [{
            value: '选项1',
            label: '运营'
          },
          {
            value: '选项2',
            label: '客服'
          }
        ],
        value: '',
        tableData: [{
            date: '2016-12-22',
            name: '上海化工',
            contact: '王小虎',
            tel: '18565805967',
            AppId: 'SH0087',
            ApiKey: 'evxvxW4nfgffc'
          },
          {
            date: '2016-05-02',
            name: '深圳机场',
            contact: '李丽',
            tel: '13789635623',
            AppId: 'SZ8963',
            ApiKey: 'evxvdfddfg57'
          }
        ],
        tableLabel: [{
            label: '申请时间',
            prop: 'date'
          },
          {
            label: '公司名称',
            prop: 'name'
          },
          {
            label: '联系人',
            prop: 'contact'
          },
          {
            label: '联系电话',
            prop: 'tel'
          },
          {
            label: 'APP ID',
            prop: 'AppId'
          },
          {
            label: 'API Key',
            prop: 'ApiKey'
          }
        ],
      }
    },
    computed: {
      // addAPIForm() {
      //   return this.list;
      // }
    },
    methods: {
      // modify() {
      //   this.$emit('modify', this.addAPIForm);
      // },
      open() {
        this.dialogFormVisible = false
        this.fullscreenLoading = true
        setTimeout(() => {
          this.fullscreenLoading = false
          this.$message({
            message: '添加成功！',
            type: 'success'
          })
        }, 2000)
      },
      close() {
        this.dialogFormVisible = false
        // this.$refs[registerForm].resetFields();
      },
      handleClick(row) {
        this.$msgbox({
          title: '详情',
          message: row,
          confirmButtonText: '确定',
        })
      },

      addRow() {
        let date = new Date();
        let seperator1 = "-";
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        let currentdate = year + seperator1 + month + seperator1 + strDate;
        //  获取当前时间 end

        let AppId = 'SH' + Math.random().toString(36).substr(2, 4);
        let ApiKey = Math.random().toString(36).substr(2, 15);
        // let containerName = this.addAPIForm.containerName,
        this.addAPIForm = {
          date: currentdate,
          name: this.addAPIForm.name,
          containerName: this.addAPIForm.containerName,
          tel: this.addAPIForm.tel,
          AppId: AppId,
          ApiKey: ApiKey,
          notes: this.addAPIForm.notes
        };
        this.tableData.push(this.addAPIForm);
        this.dialogFormVisible = false;
      },
      //新增
      // addRow: function() {
      //   this.$refs.addForm.validate((valid) => {
      //     if (valid) {
      //       this.$confirm('确认提交吗？', '提示', {}).then(() => {
      //         this.addLoading = true;
      //         //NProgress.start();
      //         let para = Object.assign({}, this.addAPIForm);
      //         // para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth),'yyyy-MM-dd');
      //         addUser(para).then((res) => {
      //           this.addLoading = false;
      //           //NProgress.done();
      //           this.$message({
      //             message: '提交成功',
      //             type: 'success'
      //           });
      //           this.$refs['addAPIForm'].resetFields();
      //           this.dialogFormVisible = false;
      //           this.getUsers();
      //         });
      //       });
      //     }
      //   });
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
