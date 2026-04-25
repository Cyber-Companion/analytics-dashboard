// Sales Chart
const ctx1 = document.getElementById('salesChart').getContext('2d');

new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Sales',
      data: [12000, 15000, 10000, 18000, 22000, 20000, 24000],
      borderColor: '#3b82f6',
      fill: true,
      backgroundColor: 'rgba(59,130,246,0.1)'
    }]
  }
});

// Inventory Chart
const ctx2 = document.getElementById('inventoryChart').getContext('2d');

new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Lights', 'Wires', 'Switches'],
    datasets: [{
      data: [40, 30, 30],
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b']
    }]
  }
});