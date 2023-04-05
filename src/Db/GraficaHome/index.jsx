export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Weekly balance'
    }
  }
}

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export const data = {
  labels,
  datasets: [
    {
      label: 'Balance',
      fill: true,
      data: labels.map(() => Math.round(Math.random() * 1000)),
      borderColor: '#4de2ce',
      backgroundColor: '#4becd767'
    }
  ]
}
