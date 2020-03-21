<template>
  <div id="app">
    <bar-chart></bar-chart>
    <horizontal-bar-chart></horizontal-bar-chart>
    <bar-chart-grouped></bar-chart-grouped>
    <line-chart></line-chart>
    <pie-chart></pie-chart>
    <doughnut></doughnut>
    <mixed-chart></mixed-chart>
    <bubble></bubble>
    
  </div>
</template>

<script>
import BarChart from './barchart.vue'
import HorizontalBarChart from './HorizontalBarCharts.vue'
import BarChartGrouped from './BarChartGrouped.vue'
import lineChart from './line.vue'
import pieChart from './PieChart.vue'
import Doughnut from './Doughnut.vue'
import MixedChart from './MixedChart.vue'
import Bubble from './Bubble.vue'

export default {
  name: 'app',
  components: {
    BarChart,
    HorizontalBarChart,
    BarChartGrouped,
    lineChart,
    pieChart,
    Doughnut,
    MixedChart,
    Bubble
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>