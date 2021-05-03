import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }

  @Input('title') title: string = 'Sin titulo';

  @Input('labels') labels: Label[] = ['Label1', 'Label2', 'Mail-Order Sales'];

  @Input() data: MultiDataSet = [[350, 450, 100]];
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public colors: Color[] = [
    {
      backgroundColor: ['#d90429', '#f77f00', '#06d6a0'],
    },
  ];
}
