$(function() {
    "use strict";

     // chart recent defect chart
		  var ctx = document.getElementById('chart1').getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00","15:00","16:00","17:00","18:00","19:00",
										"20:00","21:00","22:00","23:00","24:00","00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00"],
					datasets: [{
						label: 'Pass',
						data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
									 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
						backgroundColor: '#d9ead3',
						borderColor: "transparent",
						pointRadius :"0",
						borderWidth: 1
					}, {
						label: 'Defect 1',
						data: [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
									 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
						backgroundColor: "#e6b8af",
						borderColor: "transparent",
						pointRadius :"0",
						borderWidth: 1
					}]
				},
			options: {
				maintainAspectRatio: false,
				legend: {
				  display: false,
				  labels: {
					fontColor: '#ddd',  
					boxWidth:40
				  }
				},
				tooltips: {
				  displayColors:false
				},	
			  scales: {
				  xAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#ddd'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(221, 221, 221, 0.08)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#ddd'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(221, 221, 221, 0.08)"
					},
				  }]
				 }

			 }
			});  
		
			// chart today defect
			var ctx = document.getElementById("chart2").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ["Pass", "Defect 1", "Defect 2", "Defect 3"],
					datasets: [{
						backgroundColor: [
							"#d9ead3",
							"#e6b8af",
							"#f4cccc",
							"#d9d2e9",
							"#d0e0e3",
							"#c9daf8",
							"#cfe2f3"
						],
						data: [100, 35, 25, 1],
						borderWidth: [0, 0, 0, 0]
					}]
				},
			options: {
				maintainAspectRatio: false,
			   legend: {
				 position :"bottom",	
				 display: false,
				    labels: {
					  fontColor: '#ddd',  
					  boxWidth:15
				   }
				}
				,
				tooltips: {
				  displayColors:false
				}
				 }
				 
			});
			// chart compare with yesterday
			var ctx = document.getElementById("chart3").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ["Pass", "Defect 1", "Defect 2", "Defect 3"],
					datasets: [{
						backgroundColor: [
							"#d9ead3",
							"#e6b8af",
							"#f4cccc",
							"#d9d2e9",
						],
						data: [100, 35, 25, 1],
						borderWidth: [0, 0, 0, 0]
					}]
				},
			options: {
				maintainAspectRatio: false,
			   legend: {
				 position :"bottom",	
				 display: false,
				    labels: {
					  fontColor: '#ddd',  
					  boxWidth:15
				   }
				}
				,
				tooltips: {
				  displayColors:false
				}
				 }
				 
			});

			// chart weekly summary
			var ctx = document.getElementById("chart4").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ["Pass", "Defect 1", "Defect 2", "Defect 3"],
					datasets: [{
						backgroundColor: [
							"#d9ead3",
							"#e6b8af",
							"#f4cccc",
							"#d9d2e9"
						],
						data: [100, 35, 25, 1],
						borderWidth: [0, 0, 0, 0]
					}]
				},
			options: {
				maintainAspectRatio: false,
			   legend: {
				 position :"bottom",	
				 display: false,
				    labels: {
					  fontColor: '#ddd',  
					  boxWidth:15
				   }
				}
				,
				tooltips: {
				  displayColors:false
				}
				 }
				 
			});
		
		
   });	 
   