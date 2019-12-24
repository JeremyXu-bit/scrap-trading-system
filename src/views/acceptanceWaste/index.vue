<template>
  <div class="dashboard-container">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="出库时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="开始时间" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2" style="text-align: center;">-</el-col>
        <el-col :span="11">
          <el-date-picker v-model="form.date2" type="date" placeholder="结束时间" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="出库单号">
        <el-input v-model="form.number" />
      </el-form-item>
      <el-form-item label="核心企业名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item>
        <el-button>搜索</el-button>
        <!-- <el-button @click="dialogTableVisible = true">出库</el-button> -->
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
              <el-table-column label="出库时间" width="200">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="number" label="出库单号" width="250">
                <el-button
                  slot-scope="scope"
                  type="text"
                  size="small"
                  round
                  @click="dialogTableVisible = true"
                >{{ scope.row.number }}</el-button>
              </el-table-column>
              <el-table-column prop="type" label="废品类型" />
              <el-table-column prop="name" label="核心企业名称" />
              <el-table-column prop="operation" label="操作" show-overflow-tooltip>
                <template>
                  <el-button type="text" size="small" @click="dialogFormVisible = true">验收</el-button>
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
                <el-dialog title="出库单详情" :visible.sync="dialogTableVisible">
                  <el-table :data="gridData3" border>
                    <el-table-column property="coreName" label="核心企业名称" />
                    <el-table-column property="name" label="客户名称" />
                    <el-table-column property="date" label="出库时间" />
                    <el-table-column property="number" label="出库单号" />
                    <el-table-column property="senderName" label="发货人" />
                    <el-table-column property="senderTel" label="发货人联系方式" />
                    <el-table-column property="acceptName" label="收货人" />
                    <el-table-column property="acceptTel" label="收货人联系方式" />
                  </el-table>
                  <el-table :data="gridData2" style="margin-top:50px" border>
                    <el-table-column property="name" label="废品名称" />
                    <el-table-column property="totals" label="总量" />
                  </el-table>
                  <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
                  </div>
                </el-dialog>
              </div>
            </template>

            <template>
              <div>
                <el-dialog title="确认发货" :visible.sync="dialogFormVisible">
                  <el-form :model="form3">
                    <el-form-item label="验收人" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="验收人电话" :label-width="formLabelWidth">
                      <el-input v-model="form.tel" autocomplete="off" />
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">验 收</el-button>
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
      dialogFormVisible: false,
      gridData3: [
        {
          coreName: '中国园林',
          name: '张安',
          date: '2016-05-03',
          number: 'SW2345678',
          senderName: '李晓',
          senderTel: '13767890987',
          acceptName: '钟启超',
          acceptTel: '18679089745'
        }
      ],
      gridData2: [
        {
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
