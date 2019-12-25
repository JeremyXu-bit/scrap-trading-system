<template>
  <div class="dashboard-container">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="发布时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="开始时间" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2" style="text-align:center">-</el-col>
        <el-col :span="11">
          <el-date-picker v-model="form.date2" type="date" placeholder="结束时间" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="发货单号">
        <el-input v-model="form.number" />
      </el-form-item>
      <el-form-item label="供应商类型">
        <el-select v-model="form.type" placeholder="请选择供应商类型" style="width:100%;">
          <el-option label="企业" value="qiye" />
          <el-option label="个人" value="geren" />
        </el-select>
      </el-form-item>
      <el-form-item label="供应商名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item>
        <el-button>搜索</el-button>
        <el-button @click="dialogFormVisible = true">入库</el-button>
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
              <el-table-column type="selection" width="55" />
              <el-table-column label="发货时间" width="200">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="number" label="发货单号" width="250">
                <el-button
                  slot-scope="scope"
                  type="text"
                  size="small"
                  round
                  @click="dialogTableVisible = true"
                >{{ scope.row.number }}</el-button>
              </el-table-column>
              <el-table-column prop="type" label="供应商类型" />
              <el-table-column prop="name" label="供应商名称" />
              <el-table-column prop="wasteType" label="废品种类" />
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
                <el-dialog title="发货单详情" :visible.sync="dialogTableVisible">
                  <el-table :data="gridData" border>
                    <el-table-column property="name" label="供应商名称" />
                    <el-table-column property="acceptName" label="核心企业名称" />
                    <el-table-column property="date" label="发货时间" />
                    <el-table-column property="number" label="发货单号" />
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
<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
}
</style>

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
      dialogFormVisible: false,
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
    }
  }
}
</script>
