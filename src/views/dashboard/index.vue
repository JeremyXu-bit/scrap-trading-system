<template>
  <div class="dashboard-container">
    <div>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-row :gutter="0">
              <el-col :span="10"><div class="grid-content"><i class="icon el-icon-s-opportunity"></i></div></el-col>
              <el-col :span="14">
                <div class="grid-content text-left">
                  <p class="text text-tip">漏洞个数</p>
                  <p class="text text-number">1568</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-row :gutter="0">
              <el-col :span="10"><div class="grid-content"><i class="icon el-icon-s-opportunity"></i></div></el-col>
              <el-col :span="14">
                <div class="grid-content text-left">
                  <p class="text text-tip">漏洞个数</p>
                  <p class="text text-number">1568</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-row :gutter="0">
              <el-col :span="10"><div class="grid-content"><i class="icon el-icon-s-opportunity"></i></div></el-col>
              <el-col :span="14">
                <div class="grid-content text-left">
                  <p class="text text-tip">漏洞个数</p>
                  <p class="text text-number">1568</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-row :gutter="0">
              <el-col :span="10"><div class="grid-content"><i class="icon el-icon-s-opportunity"></i></div></el-col>
              <el-col :span="14">
                <div class="grid-content text-left">
                  <p class="text text-tip">漏洞个数</p>
                  <p class="text text-number">1568</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="width:100%;height:500px" ref="chart"></div>
  </div>
</template>
<script>
const echarts = require("echarts");
export default {
  data() {
    return {};
  },
  methods: {
    initCharts() {
      let myChart = echarts.init(this.$refs.chart);
      // 绘制图表
      myChart.setOption({
        title: { text: "" },
        tooltip: {},
        xAxis: {
          data: ["一月", "二月", "三月", "四月", "五月", "六月","七月", "八月", "九月", "十月", "十一月", "十二月"]
        },
        yAxis: {},
        series: [
          {
            name: "2019年销量",
            type: 'line',
                symbol: 'circle', // 拐点类型
                smooth: true,
                symbolSize: 3, // 拐点圆的大小
                itemStyle: {
                    normal: {
                        color: '#ff5050', // 折线条的颜色
                        borderColor: '#ff5050', // 拐点边框颜色
                    }
                },
            data: [20, 36, 16, 19, 20,35,78,45,39,48,56,68],
          },
          {
            name: "2020年销量",
            type: 'line',
                symbol: 'circle', // 拐点类型
                smooth: true,
                symbolSize: 3, // 拐点圆的大小
                itemStyle: {
                    normal: {
                        color: '#fbc016', // 折线条的颜色
                        borderColor: '#fbc016', // 拐点边框颜色
                    }
                },
            data: [45, 40, 36, 34, 30,45,88,54,43,45,51,60],
          }
        ]
      });
    }
  },
  mounted() {
    this.initCharts();
  }
}
</script>
<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #f3f3f3;
}
.bg-purple {
  background: #f3f3f3;
}
.bg-purple-light {
  background: #f3f3f3;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
}
.text-left{
  text-align: left;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.icon{
    font-size: 36px;
    padding: 20px 0;
    color: #409eff;
  }
.text{
  line-height: 0%;
  padding-top: 10px;
}
.text-number{
  padding-top: 0;
  font-weight: 200;
  font-size: 27px;
}
</style>