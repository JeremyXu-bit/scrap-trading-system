<template>
  <div class="dashboard-container">
    <el-table border :data="tableData" style="width: 100%">
      <el-table-column prop="account" label="账号" />
      <el-table-column prop="state" label="认证状态">
        <span slot-scope="scope">{{ scope.row.state }}<span style="padding:0 10px;">|</span>
          <template>
            <el-button type="text" prop="text" @click="dialogFormVisible = true">
              {{ scope.row.text }}
            </el-button>
          </template>
        </span>
      </el-table-column>
      <el-table-column prop="type" label="所属类型" />
    </el-table>

    <template>
      <div>
        <el-dialog title="企业实名认证" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="企业名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="企业官网URL" :label-width="formLabelWidth">
              <el-input v-model="form.URL" autocomplete="off" />
            </el-form-item>
            <el-form-item label="统一社会信用代码" :label-width="formLabelWidth">
              <el-input v-model="form.code" autocomplete="off" />
            </el-form-item>
            <el-form-item label="联系人姓名" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="联系人身份证号" :label-width="formLabelWidth">
              <el-input v-model="form.IDNumber" autocomplete="off" />
            </el-form-item>
            <el-form-item label="联系人身份证正面" :label-width="formLabelWidth">
              <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                <i class="el-icon-upload" />
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              </el-upload>
            </el-form-item>
            <el-form-item label="联系人身份证背面" :label-width="formLabelWidth">
              <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                <i class="el-icon-upload" />
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              </el-upload>
            </el-form-item>
            <el-form-item label="企业营业执照" :label-width="formLabelWidth">
              <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                <i class="el-icon-upload" />
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div slot="tip" class="el-upload__tip" style="margin-top: 0;line-height: 0;">只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </template>
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
      tableData: [{
        account: '195679807654',
        state: '认证失败',
        type: '供应商',
        text: '重新认证'
      }],
      dialogFormVisible: false,
      formLabelWidth: '125px',
      form: [{
        name: '',
        URL: '',
        code: '',
        name: '',
        IDNumber: ''
      }]
    }
  }
}

</script>
