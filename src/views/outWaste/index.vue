<template>
  <div class="dashboard-container">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="发布时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="开始时间" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-date-picker v-model="form.date2" type="date" placeholder="结束时间" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="入库单号">
        <el-input v-model="form.number" />
      </el-form-item>
      <el-form-item label="供应商名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item>
        <el-button>搜索</el-button>
        <el-button @click="dialogTableVisible2 = true">出库</el-button>
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
              <el-table-column label="入库时间" width="200">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="number" label="入库单号" width="250">
                <el-button
                  slot-scope="scope"
                  type="text"
                  size="small"
                  round
                  @click="dialogTableVisible = true"
                >{{ scope.row.number }}</el-button>
              </el-table-column>
              <el-table-column prop="type" label="废品类型" />
              <el-table-column prop="wasteType" label="已出库废品种类" />
              <el-table-column prop="name" label="供应商名称" />
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
                <el-dialog title="入库单详情" :visible.sync="dialogTableVisible">
                  <el-table :data="gridData3" border>
                    <el-table-column property="name" label="供应商名称" />
                    <el-table-column property="acceptName" label="核心企业名称" />
                    <el-table-column property="date" label="入库时间" />
                    <el-table-column property="number" label="入库单号" />
                    <el-table-column property="entrepotName" label="仓库名称" />
                    <el-table-column property="entrepotAdd" label="仓库地址" />
                    <el-table-column property="name2" label="仓库联系人" />
                    <el-table-column property="tel" label="仓库联系电话" />
                  </el-table>
                  <el-table :data="gridData2" style="margin-top:50px" border>
                    <el-table-column property="number" label="废品单号" />
                    <el-table-column property="name" label="废品名称" />
                    <el-table-column property="totals" label="总量" />
                  </el-table>
                  <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
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
        <el-dialog title="确认出库" :visible.sync="dialogTableVisible2">
          <el-table :data="gridData" border>
            <el-table-column property="wasteNumber" label="废品单号" />
            <el-table-column property="wasteName" label="废品名称" />
            <el-table-column property="totals" label="总量" />
            <el-table-column property="balance" label="剩余总量" />
            <el-table-column property="outQTY" label="出库数量">
              <template slot-scope="scope">
                <el-input v-model="scope.row.a" placeholder="出库数量" clearable />
              </template>
            </el-table-column>
          </el-table>
          <div slot="footer" class="dialog-footer">
            <el-button
              type="primary"
              @click="dialogTableVisible2 = false;dialogFormVisible2 = true"
            >下一步</el-button>
          </div>
        </el-dialog>
      </div>
    </template>

    <template>
      <div>
        <el-dialog title="确认出库" :visible.sync="dialogFormVisible2">
          <el-form :model="form3">
            <el-form-item label="发送方联系人" :label-width="formLabelWidth">
              <el-input v-model="form3.sendName" autocomplete="off" />
            </el-form-item>
            <el-form-item label="发送方联系电话" :label-width="formLabelWidth">
              <el-input v-model="form3.sendNumber" autocomplete="off" />
            </el-form-item>
            <el-form-item label="接收客户名称" :label-width="formLabelWidth">
              <el-input v-model="form3.contactsName" autocomplete="off" />
            </el-form-item>
            <el-form-item label="接收方联系人" :label-width="formLabelWidth">
              <el-input v-model="form3.contacts" autocomplete="off" />
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible2 = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible2 = false">确 认</el-button>
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
      dialogFormVisible2: false,
      dialogTableVisible2: false,
      form2: {
        name: '',
        number: ''
      },
      tableData: [
        {
          date: '2016-05-03',
          number: 'SF20191230123456030',
          wasteType: '金属',
          type: '企业',
          name: '唐山钢铁集团'
        },
        {
          date: '2016-05-03',
          number: 'SF20195673456030',
          wasteType: '木材',
          type: '个人',
          name: '上海市林业局'
        }
      ],
      multipleSelection: [],
      dialogTableVisible: false,
      gridData3: [
        {
          name: '中国园林',
          acceptName: '绿化企业',
          date: '2016-05-03',
          number: 'SW2345678',
          entrepotName: '一号仓库',
          entrepotAdd: '上海市',
          name2: '钟启超',
          tel: '18679089745'
        }
      ],
      gridData2: [
        {
          number: 'SW2345678',
          name: '树木',
          totals: '50吨'
        },
        {
          number: 'SW2345678',
          name: '树木',
          totals: '50吨'
        }
      ],
      form3: [
        {
          sendName: '',
          sendNumber: '',
          contactsName: '',
          contacts: ''
        }
      ],
      formLabelWidth: '120px'
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
