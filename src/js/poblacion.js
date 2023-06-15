import Chart from 'chart.js/auto'

(async function() {
  const data = [
    { year: 1911, poblacion: 3015 },
    { year: 1921, poblacion: 2797 },
    { year: 1931, poblacion: 2664 },
    { year: 1951, poblacion: 3078 },
    { year: 1961, poblacion: 4082 },
    { year: 1971, poblacion: 7148 },
    { year: 1981, poblacion: 12331 },
    { year: 1991, poblacion: 14930 },
    { year: 2001, poblacion: 16001 },
    { year: 2011, poblacion: 16384 },
    { year: 2021, poblacion: 16815 },
  ];

  new Chart(
    document.getElementById('myChart'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Habitantes por año',
            data: data.map(row => row.poblacion)
          }
        ]
      },
      options: {
        responsive: true
      }
    }
  );
})();