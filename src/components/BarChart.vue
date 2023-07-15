<template>
  <Bar
    id="my-chart-id"
    :data="chartData"
    :options="chartOptions"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ 
          { 
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20, 12] 
          },
          { 
            label: 'Data Two',
            backgroundColor: '#105272',
            data: [25, 12, 26] 
          } 
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true
      }
    }
  },
}
</script>