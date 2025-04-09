import { Component, Input, OnInit } from '@angular/core';
import { getCSSVariableValue } from '@presentation/layout/kt/_utils';
import { KeeniconComponent } from '@presentation/shared/components/keenicon/keenicon.component';
import { DropdownMenu1Component } from '@presentation/partials/content/dropdown-menus/dropdown-menu1/dropdown-menu1.component';
import { NgClass } from '@angular/common';
@Component({
    selector: 'app-mixed-widget7',
    templateUrl: './mixed-widget7.component.html',
        imports: [NgClass,KeeniconComponent, DropdownMenu1Component],
})
export class MixedWidget7Component implements OnInit {
  @Input() chartColor: string = '';
  @Input() chartHeight: string;
  chartOptions: any = {};

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = getChartOptions(this.chartHeight, this.chartColor);
  }
}

function getChartOptions(chartHeight: string, chartColor: string) {
  const baseColor = getCSSVariableValue('--bs-' + chartColor);
  const lightColor = getCSSVariableValue('--bs-' + chartColor + '-light');
  const labelColor = getCSSVariableValue('--bs-gray-700');

  return {
    series: [74],
    chart: {
      fontFamily: 'inherit',
      height: chartHeight,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '65%',
        },
        dataLabels: {
          name: {
            show: false,
            fontWeight: '700',
          },
          value: {
            color: labelColor,
            fontSize: '30px',
            fontWeight: '700',
            offsetY: 12,
            show: true,
            formatter: function (val: number) {
              return val + '%';
            },
          },
        },
        track: {
          background: lightColor,
          strokeWidth: '100%',
        },
      },
    },
    colors: [baseColor],
    stroke: {
      lineCap: 'round',
    },
    labels: ['Progress'],
  };
}
