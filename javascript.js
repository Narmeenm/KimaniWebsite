var barChart = document.getElementById('barChart').getContext('2d');
var myBarChart = new Chart(barChart, {
    type: 'bar',
    data: {
      labels: ["Leadership", "Goal-Oriented", "Creativity", "Criticial Thinking", "Design Thinking","Digital Business Development"],
      datasets: [
        {
          label: "skills (types)",
          backgroundColor: ["#8D6440", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#8D6440"],
          data: [8,7,6,5,8,9]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'My Skills'
      }
    }
});
