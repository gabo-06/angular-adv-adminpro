import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
    selector: 'app-dona',
    templateUrl: './dona.component.html',
    styles: [
    ]
})
export class DonaComponent implements OnInit
{
    public doughnutChartData: ChartData<'doughnut'> = {} as ChartData<'doughnut'>;
    @Input() title: string = 'Sin título';
    @Input() labels: string[] = [];
    @Input() data: number[] = [];

    ngOnInit()
    {
        this.configurarDona();
    }

    public configurarDona()
    {
        this.doughnutChartData = {
            labels: this.labels,
            datasets: [{
                data: this.data,
                backgroundColor: [
                    'red', 'blue', 'green'
                ]
            }]
        };
    }
}