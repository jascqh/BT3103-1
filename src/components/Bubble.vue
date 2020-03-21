<template>
  <div class="chart">
    <h1>Bubble Chart</h1>
    <chart></chart>
    <h1>Bubble Chart with firebase data</h1>
    <fire-base-bubble></fire-base-bubble>
  </div>
</template>

<script>
import Chart from "../Bubble.js";
import FireBaseBubble from "../BubbleChartFB.js";
export default {
  components: {
    Chart,
    FireBaseBubble
  }
};
</script>

<style>
</style>