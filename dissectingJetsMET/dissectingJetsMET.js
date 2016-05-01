function myFunc(){

    alert("test");
    alert(document.getElementById("Variables1").value);

}

var nPartons = document.getElementById("versusNpartons");

var datumMHT = {
            label: "MHT",
            fill: false,
            lineTension: .1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "rgba(256,256,256,1)",
            pointBorderWidth: 2,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
            };

var datumHT = {
            label: "HT",
            fill: false,
            lineTension: .1,
            backgroundColor: "rgba(75,75,192,0.4)",
            borderColor: "rgba(75,75,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,75,192,1)",
            pointBackgroundColor: "rgba(256,256,256,1)",
            pointBorderWidth: 2,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(75,75,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [1, 32, 10, 10, 70, 50, 35],
            };

var datumSumMj = {
            label: "SumMj",
            fill: false,
            lineTension: .1,
            backgroundColor: "rgba(75,192,75,0.4)",
            borderColor: "rgba(75,192,75,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,75,1)",
            pointBackgroundColor: "rgba(256,256,256,1)",
            pointBorderWidth: 2,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(75,192,75,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [120, 100, 80, 60, 40, 20, 0]
            };

var datumMT2 = {
            label: "MT2",
            fill: false,
            lineTension: .1,
            backgroundColor: "rgba(192,75,192,0.4)",
            borderColor: "rgba(192,75,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(192,75,192,1)",
            pointBackgroundColor: "rgba(256,256,256,1)",
            pointBorderWidth: 2,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(192,75,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 60, 10, 40, 73, 22, 100]
            };

var datumAlphaT = {
            label: "AlphaT",
            fill: false,
            lineTension: .1,
            backgroundColor: "rgba(192,192,75,0.4)",
            borderColor: "rgba(192,192,75,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(192,192,75,1)",
            pointBackgroundColor: "rgba(256,256,256,1)",
            pointBorderWidth: 2,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(192,192,75,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [99,10,95,15,80,25,75]
            };

var datumNJets = {
            label: "NJets",
            fill: false,
            lineTension: .1,
            backgroundColor: "rgba(192,75,75,0.4)",
            borderColor: "rgba(192,75,75,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(192,75,75,1)",
            pointBackgroundColor: "rgba(256,256,256,1)",
            pointBorderWidth: 2,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(192,75,75,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [40, 42, 38, 45, 41, 35, 39]
            };
  
var nPartonsData = {
    labels: ["2", "3", "4", "5", "6", "7","8"],
    datasets:[ datumHT , datumMHT , datumSumMj , datumMT2 , datumAlphaT , datumNJets ]
    };

var myLineChart = new Chart(nPartons, {
    type: 'line',
    data: nPartonsData,
    options: {
        responsive:false
    }
   
});

