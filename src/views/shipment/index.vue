<template>
  <div class="dashboard-container">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="发布时间" style="margin-bottom: -15px;">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="开始时间" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-date-picker v-model="form.date2" type="date" placeholder="结束时间" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="审核状态">
        <el-select v-model="form.status" placeholder="审核中">
          <el-option label="审核中" value="auditing" />
          <el-option label="成功" value="success" />
          <el-option label="失败" value="faily" />
        </el-select>
      </el-form-item>
      <el-form-item label="供应商类型">
        <el-select v-model="form.type" placeholder="个人">
          <el-option label="企业" value="company" />
          <el-option label="个人" value="personal" />
        </el-select>
      </el-form-item>
      <el-form-item label="发货单号">
        <el-input v-model="form.number" />
      </el-form-item>
      <el-form-item label="供应商名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="接收单位">
        <el-input v-model="form.acceptName" />
      </el-form-item>
      <el-form-item>
        <el-button>搜索</el-button>
        <!-- <el-button @click="dialogFormVisible = true">确定接受</el-button> -->
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
              <el-table-column label="发货时间">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="number" label="发货单号" width="200">
                <el-button
                  slot-scope="scope"
                  type="text"
                  size="small"
                  round
                  @click="dialogTableVisible = true"
                >{{ scope.row.number }}</el-button>
              </el-table-column>
              <el-table-column prop="providerType" label="供应商种类" />
              <el-table-column prop="providerName" label="供应商名称" />
              <el-table-column prop="name" label="接受企业" />
              <el-table-column prop="status" label="状态" />
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
                <el-dialog title="订单详情" :visible.sync="dialogTableVisible">
                  <el-table :data="gridData" border>
                    <el-table-column property="name" label="供应商名称" />
                    <el-table-column property="acceptName" label="接受企业" />
                    <el-table-column property="date" label="订单时间" />
                    <el-table-column property="number" label="订单单号" />
                    <el-table-column property="name2" label="收货人" />
                    <el-table-column property="tel" label="收货人联系电话" />
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
      tableData: [
        {
          date: '2016-05-03',
          number: 'SF20191230123456030',
          providerType: '国企',
          providerName: '福建船厂',
          name: '中国重工',
          status: '成功'
        },
        {
          date: '2016-05-03',
          number: 'SF20191230123456030',
          providerType: '国企',
          providerName: '福建',
          name: '中国重工',
          status: '失败'
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
      ]
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
.el-form-item {
  width: 50%;
  display: inline-block;
}
</style>
