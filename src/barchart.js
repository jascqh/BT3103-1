import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels: ["Monday", "Tuesday","Wednesday", "Thursday", "Friday"],
            datasets: [{
                label: "",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: [2478,5267,734,784,433]
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: "Number of items bought throughout the week"
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}