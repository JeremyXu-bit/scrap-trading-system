<template>
  <div class="dashboard-container" style="text-align: center;">
    <template>
      <el-select v-model="value" clearable placeholder="请选择" label="角色">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" plain @click="dialogFormVisible = true">权限配置</el-button>
    </template>
    <template>
      <div>
        <el-dialog title="权限配置" :visible.sync="dialogFormVisible">
          <el-tree :data="data" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current
            :props="defaultProps">
          </el-tree>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button v-loading.fullscreen.lock="fullscreenLoading" type="primary" @click="close">确 定</el-button>
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
        fullscreenLoading: false,
        dialogFormVisible: false,
        options: [{
          value: '1',
          label: '个人'
        }, {
          value: '2',
          label: '商户'
        }, {
          value: '3',
          label: '企业'
        }, {
          value: '4',
          label: '国企'
        }, {
          value: '5',
          label: '外资'
        }],
        value: '',
        data: [{
          id: 1,
          label: '发布废品'
        }, {
          id: 2,
          label: '接受废品'
        }, {
          id: 3,
          label: '发货'
        }, {
          id: 4,
          label: '入库废品'
        }, {
          id: 5,
          label: '接受废品'
        }, {
          id: 6,
          label: '验收废品'
        }, {
          id: 7,
          label: '查询',
          children: [{
            id: 10,
            label: '废品'
          }, {
            id: 11,
            label: '发货'
          }, {
            id: 12,
            label: '入库单'
          }, {
            id: 13,
            label: '出库单'
          }, {
            id: 14,
            label: '验收单'
          }]
        }, {
          id: 8,
          label: '审核废品'
        }, {
          id: 9,
          label: '实名认证'
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      close(){
        this.dialogFormVisible = false
        this.fullscreenLoading = true
        setTimeout(() => {
          this.fullscreenLoading = false
          this.$message({
            message: '权限修改成功！',
            type: 'success'
          })
        }, 2000)
      }
    }
  };

</script>
<style lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }
  }
.el-dialog__body{
    padding: 10px 20px;
}
.el-tree{
    border: 1px solid #ccc;
    padding: 20px 0;
    border-radius: 5px;
}
</style>
