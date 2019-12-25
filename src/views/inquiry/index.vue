<template>
  <div class="dashboard-container">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="发布时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="开始时间" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2" style="text-align:center;">-</el-col>
        <el-col :span="11">
          <el-date-picker v-model="form.date2" type="date" placeholder="结束时间" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="审核状态">
        <el-select v-model="form.status" placeholder="审核中" style="width:100%;">
          <el-option label="审核中" value="auditing" />
          <el-option label="成功" value="success" />
          <el-option label="失败" value="faily" />
        </el-select>
      </el-form-item>
      <el-form-item label="供应商类型">
        <el-select v-model="form.type" placeholder="个人" style="width:100%;">
          <el-option label="企业" value="company" />
          <el-option label="个人" value="personal" />
        </el-select>
      </el-form-item>
      <el-form-item label="废品单号">
        <el-input v-model="form.number" />
      </el-form-item>
      <el-form-item label="供应商名称">
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
              <el-table-column prop="date" label="发布时间">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="number" label="废品单号">
                <el-button
                  slot-scope="scope"
                  type="text"
                  size="small"
                  round
                  @click="dialogTableVisible = true"
                >{{ scope.row.number }}</el-button>
              </el-table-column>
              <el-table-column prop="name" label="废品名称" />
              <el-table-column prop="type" label="供应商类型" />
              <el-table-column prop="name2" label="供应商名称" />
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
                <el-dialog title="废品详情" :visible.sync="dialogTableVisible">
                  <table v-for="(item, index) in gridData" :key="index">
                    <tr>
                      <th>发布时间：</th>
                      <td>{{ item.date }}</td>
                    </tr>
                    <tr>
                      <th>废品单号：</th>
                      <td>{{ item.number }}</td>
                    </tr>
                    <tr>
                      <th>废品名称：</th>
                      <td>{{ item.wasteName }}</td>
                    </tr>
                    <tr>
                      <th>总量：</th>
                      <td>{{ item.total }}</td>
                    </tr>
                    <tr>
                      <th>供应商名称：</th>
                      <td>{{ item.vendorName }}</td>
                    </tr>
                    <tr>
                      <th>供应商类型：</th>
                      <td>{{ item.vendorType }}</td>
                    </tr>
                    <tr>
                      <th>发布状态：</th>
                      <td>{{ item.status }}</td>
                    </tr>
                    <tr>
                      <th>发布人：</th>
                      <td>{{ item.publisher }}</td>
                    </tr>
                    <tr>
                      <th>联系方式：</th>
                      <td>{{ item.tel }}</td>
                    </tr>
                    <tr>
                      <th>审核时间：</th>
                      <td>{{ item.reviewDate }}</td>
                    </tr>
                    <tr>
                      <th>审核人：</th>
                      <td>{{ item.Verifier }}</td>
                    </tr>
                    <tr>
                      <th>审核单位：</th>
                      <td>{{ item.reviewUnit }}</td>
                    </tr>
                    <tr>
                      <th>审核失败原因：</th>
                      <td>{{ item.reason }}</td>
                    </tr>
                  </table>
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
      tableData: [
        {
          date: '2016-05-03',
          number: 'SF20191230123456030',
          name: '金属',
          type: '企业',
          name2: '上海化工',
          status: '成功'
        },
        {
          date: '2016-05-07',
          number: 'SF20191230123456030',
          name: '金属',
          type: '企业',
          name2: '上海化工',
          status: '审核中'
        }
      ],
      dialogTableVisible: false,
      multipleSelection: [],
      gridData: [
        {
          date: '2016-05-03',
          number: 'BG3578784535',
          wasteName: '樟木',
          total: '200KG',
          vendorName: '上海林业局',
          vendorType: '企业',
          status: '成功',
          publisher: '陈小虎',
          tel: '15678907658',
          reviewDate: '2016-05-08',
          Verifier: '李丽',
          reviewUnit: '上海审计局',
          reason: '拒绝……'
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
