//include 'setup' then 'config' above
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];
const data = {
labels: labels,
datasets: [{
    label: 'My First dataset',
    backgroundColor: '#000',
    borderColor: '#333',
    data: [0, 10, 5, 2, 20, 30, 45],
}]
};

const config = {
    type: 'line',
    data,
    options: {}
};

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);