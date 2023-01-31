import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.patientGraph();
  }


  patientGraph() {
    var myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: [
          'Monday',
          'Tuesday',
          'Wedensday',
          'Thusday',
          'Friday',
          'Saturay',
        ],
        datasets: [
          {
            label: 'No. of Patients',
            data: [120, 54, 80, 50, 60, 30],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 3,
          },
        ],
      },
      options: {
        aspectRatio: 1,
        scales: {
          y: {
            max: 200,
          },
        },
      },
    });
  }
}
