<template>

  <div>
    <h1>博客园首页</h1>
    <div style="width:500px;height:500px" ref="chart" class="center-block"></div>
  </div>
</template>

<script>
export default{
  name: "index",
  data () {
    return {};
  },
  methods: {
    initCharts () {
      let myChart = this.$echarts.init(this.$refs.chart);
      // console.log(this.$refs.chart)
      // 绘制图表
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  },
  mounted () {
    this.initCharts();
  }
}
</script>

<style scoped>

</style>
