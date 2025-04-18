const ctx = document.getElementById('pizzaDespesas').getContext('2d');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Despesas Fixas', 'Despesas Variáveis', 'Despesas Extras', 'Investimentos'],
    datasets: [{
      data: [18000, 8580, 2920, 3600],
      backgroundColor: [
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(75, 192, 192, 0.6)' // Verde água para investimentos
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      tooltip: {
        callbacks: {
          label: function (context) {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const valor = context.parsed;
            const porcentagem = ((valor / total) * 100).toFixed(1);
            return `${context.label}: R$ ${valor.toLocaleString('pt-BR')} (${porcentagem}%)`;
          }
        }
      }
    }
  }
});