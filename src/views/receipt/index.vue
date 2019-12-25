<template>
  <div class="dashboard-container">
    <el-form ref="form1" :model="form" label-width="100px">
      <el-form-item label="验收时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="开始时间" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2" style="text-align:center;">-</el-col>
        <el-col :span="11">
          <el-date-picker v-model="form.date2" type="date" placeholder="结束时间" style="width: 100%;" />
        </el-col>
      </el-form-item>

      <el-form-item label="验收单号">
        <el-input v-model="form.number" />
      </el-form-item>
      <el-form-item label="核心企业名称">
        <el-input v-model="form.coreName" />
      </el-form-item>
      <el-form-item label="客户名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item>
        <el-button>搜索</el-button>
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
              <el-table-column label="验收时间" width="200">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="number" label="验收单号" width="250">
                <el-button
                  slot-scope="scope"
                  type="text"
                  size="small"
                  round
                  @click="dialogTableVisible = true"
                >{{ scope.row.number }}</el-button>
              </el-table-column>
              <el-table-column prop="coreName" label="核心企业名称" />
              <el-table-column prop="customerName" label="客户名称" />
              <el-table-column prop="wasteTotals" label="废品总件数" />
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
                <el-dialog title="验收单详情" :visible.sync="dialogTableVisible">
                  <el-table :data="gridData" border>
                    <el-table-column property="acceptName" label="核心企业名称" />
                    <el-table-column property="name" label="供应商名称" />
                    <el-table-column property="date" label="验收时间" />
                    <el-table-column property="number" label="验收单号" />
                    <el-table-column property="sendName" label="发货人" />
                    <el-table-column property="sendTel" label="发货人联系电话" />
                    <el-table-column property="name2" label="收货人" />
                    <el-table-column property="tel" label="收货人联系电话" />
                  </el-table>
                  <el-table :data="gridData2" style="margin-top:50px" border>
                    <!-- <el-table-column property="number" label="废品单号"></el-table-column> -->
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
  </div>
</template>

<script>
export default {

  data() {
    return {
      form1: {
        date1: '',
        date2: '',
        number: '',
        type: '',
        name: ''
      },
      tableData: [
        {
          date: '2016-05-03',
          number: 'SF20191230123456030',
          coreName: '唐山钢铁集团',
          customerName: '中国化工',
          wasteTotals: '500KG'
        },
        {
          date: '2016-05-03',
          number: 'SF20191230123456030',
          coreName: '唐山钢铁集团',
          customerName: '中国化工',
          wasteTotals: '500KG'
        }
      ],
      multipleSelection: [],
      dialogTableVisible: false,
      gridData: [
        {
          name: '中国园林',
          acceptName: '绿化企业',
          date: '2016-05-03',
          number: 'SW2345678',
          sendName: '张三',
          sendTel: '19670898079',
          name2: '钟启超',
          tel: '18679089745'
        }
      ],
      gridData2: [
        {
          // number: 'SW2345678',
          name: '树木',
          totals: '50吨'
        },
        {
          // number: 'SW2345678',
          name: '树木',
          totals: '50吨'
        }
      ],
      form: [
        {
          name: '',
          add: ''
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
