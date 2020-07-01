/* globals Chart:false, feather:false */
feather.replace()
  //reference graph from HTML
 var ctx = document.getElementById('myChart');

 //make chart content
 var myChart = new Chart(ctx, {
     // https://mdbootstrap.com/docs/jquery/javascript/charts/
     type: 'line',
     data: {
     labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
     datasets: [{
     label: "Superheroes",
     data: [32.56, 34.86, 35.66, 38.9, 43.6],
     backgroundColor: [
     'rgba(98, 255, 98, 0.2)',
     ],
     borderColor: [
     'rgba(0, 59, 0, 1)',
     ],
     borderWidth: 2
     },

     {
     label: "Villains",
     data: [26.38, 32.98, 41.26, 46.34, 49.48],
     backgroundColor: [
     'rgba(184, 11, 227, .2)',
     ],
     borderColor: [
     'rgba(87, 5, 107, .7)',
     ],
     borderWidth: 2
     },

     {
     label: "Portals",
     data: [29.72, 32.78, 35.1, 37.44, 39.4],
     backgroundColor: [
     'rgba(242, 219, 44, .2)',
     ],
     borderColor: [
     'rgba(168, 152, 30, 1)',
     ],
     borderWidth: 2
     }
     ]
     },
     options: {
       scales: {
         yAxes: [{
           ticks: {
             beginAtZero: false
           }
         }]
       },
       legend: {
         display: true
       }
   } //end options
});
