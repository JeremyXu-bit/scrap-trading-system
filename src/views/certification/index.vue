<template>
  <div class="dashboard-container">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="提交时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="开始时间" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2" style="text-align:center;">-</el-col>
        <el-col :span="11">
          <el-date-picker v-model="form.date2" type="date" placeholder="结束时间" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="认证类型">
        <el-select v-model="form.type" placeholder="个人" style="width:100%;">
          <el-option label="企业" value="qiye" />
          <el-option label="个人" value="geren" />
        </el-select>
      </el-form-item>
      <el-form-item label="审核状态">
        <el-select v-model="form.status" placeholder="待审核" style="width:100%;">
          <el-option label="待审核" value="Inreview" />
          <el-option label="成功" value="success" />
          <el-option label="失败" value="faily" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" plain>搜索</el-button>
      </el-form-item>
      <div style="margin-top:50px">
        <template>
          <div>
            <el-table
              ref="multipleTable"
              border
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column label="提交时间">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="type" label="类型" class-name="type" />
              <el-table-column prop="name" label="姓名/企业名称" />
              <el-table-column prop="status" label="审核状态" />
              <el-table-column prop="operation" label="操作" show-overflow-tooltip>
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="open1(scope.row)">审核</el-button>
                  <el-button type="text" size="small" @click="open2(scope.row)">详情</el-button>
                </template>
              </el-table-column>
            </el-table>

            <template>
              <div>
                <el-pagination
                  small
                  layout="prev, pager, next"
                  :total="50"
                  style="text-align:right;padding-top:10px"
                />
              </div>
            </template>

            <template>
              <div>
                <el-dialog :title="titleName[dialogStatus]" :visible.sync="persionCertificationVisible">
                  <table v-for="(item, index) in gridData2" :key="index" style="width:100%">
                    <tr>
                      <th>姓名：</th>
                      <td>{{ item.name }}</td>
                    </tr>
                    <tr>
                      <th>身份证号：</th>
                      <td>{{ item.persionID }}</td>
                    </tr>
                  </table>
                  <template>
                    <el-upload
                      class="upload-demo"
                      style="text-align: center;"
                      drag
                      action="https://jsonplaceholder.typicode.com/posts/"
                      multiple
                    >
                      <i class="el-icon-upload" />
                      <div class="el-upload__text">请上传身份证正面照</div>
                      <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
                    </el-upload>
                    <el-upload
                      class="upload-demo"
                      drag
                      action="https://jsonplaceholder.typicode.com/posts/"
                      multiple
                    >
                      <i class="el-icon-upload" />
                      <div class="el-upload__text">请上传身份证反面照</div>
                      <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
                    </el-upload>
                    <el-upload
                      class="upload-demo"
                      drag
                      style="padding-bottom: 40px;border-bottom: 1px solid #c1c1c1;"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      multiple
                    >
                      <i class="el-icon-upload" />
                      <div class="el-upload__text">请上传手持身份证照片</div>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </template>
                  <template>
                    <p>
                      <strong>拒绝原因：</strong>
                    </p>
                    <el-input
                      v-model="textarea"
                      type="textarea"
                      :rows="2"
                      placeholder="请输入内容（不超过500字）"
                      maxlength="50"
                    />
                  </template>
                  <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="persionCertificationVisible = false">同 意</el-button>
                    <el-button type="danger" @click="persionCertificationVisible = false">拒 绝</el-button>
                    <el-button type="success" @click="persionCertificationVisible = false">关 闭</el-button>
                  </div>
                </el-dialog>
              </div>
            </template>
          </div>
        </template>
      </div>
    </el-form>

    <template>
      <div>
        <el-dialog title="确认出库" :visible.sync="dialogTableVisible">
          <el-table :data="gridData" border>
            <el-table-column property="wasteNumber" label="废品单号" />
            <el-table-column property="wasteName" label="废品名称" />
            <el-table-column property="totals" label="总量" />
            <el-table-column property="balance" label="剩余总量" />
            <el-table-column property="outQTY" label="出库数量">
              <template slot-scope="scope">
                <el-input v-model="scope.row.xxx" placeholder="出库数量" clearable />
              </template>
            </el-table-column>
          </el-table>
          <div slot="footer" class="dialog-footer">
            <el-button
              type="primary"
              plain
              @click="dialogTableVisible = false;dialogFormVisible = true"
            >下一步</el-button>
          </div>
        </el-dialog>
      </div>
    </template>

    <template>
      <div>
        <el-dialog title="确认出库" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="发送方联系人" :label-width="formLabelWidth">
              <el-input v-model="form.sendName" autocomplete="off" />
            </el-form-item>
            <el-form-item label="发送方联系电话" :label-width="formLabelWidth">
              <el-input v-model="form.sendNumber" autocomplete="off" />
            </el-form-item>
            <el-form-item label="接收客户名称" :label-width="formLabelWidth">
              <el-input v-model="form.contactsName" autocomplete="off" />
            </el-form-item>
            <el-form-item label="接收方联系人" :label-width="formLabelWidth">
              <el-input v-model="form.contacts" autocomplete="off" />
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 认</el-button>
          </div>
        </el-dialog>
      </div>
    </template>
  </div>
</template>

<script>

export default {

  data() {
    return {
      titleName: {
	     persionInfo: '个人实名认证详情',
	     companyInfo: '企业实名认证详情'
	   },
	   dialogStatus: '',
      form: {
        date1: '',
        date2: '',
        number: '',
        type: '',
        name: ''
      },
      gridData: [
        {
          wasteNumber: 'MG3456678',
          wasteName: '钢材',
          totals: '400KG',
          balance: '600KG'
        },
        {
          wasteNumber: 'TY789',
          wasteName: '木材',
          totals: '90KG',
          balance: '13400KG'
        }
      ],
      dialogFormVisible: false,
      dialogTableVisible: false,
      form2: {
        name: '',
        number: ''
      },
      formLabelWidth: '120px',
      tableData: [
        {
          date: '2016-05-03',
          type: '企业',
          name: '上海化工',
          status: '待审核'
        },
        {
          date: '2016-05-03',
          type: '个人',
          name: '王小虎',
          status: '通过'
        }
      ],
      persionCertificationVisible: false,
      multipleSelection: [],
      gridData2: [
        {
          name: '上海化工',
          persionID: 'SH201806078945'
        }
      ],
      textarea: ''
    }
  },
  methods: {
    onSubmit() {
      this.$message({
        message: '提交成功',
        type: 'success'
      })
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    open1(row) {
      // console.log(row.type)
      this.persionCertificationVisible = true
      if (row.type === '企业') {
	       this.dialogStatus = 'companyInfo'
      } else {
        this.dialogStatus = 'persionInfo'
      }
    },
    open2(row) {
      this.persionCertificationVisible = true
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
tr {
  line-height: 28px;
  border: 1px;
}
th {
  width: 120px;
  text-align: right;
}
td {
  margin-left: 30px;
}
.upload-demo {
  text-align: center;
  margin-bottom: 20px;
}
</style>
