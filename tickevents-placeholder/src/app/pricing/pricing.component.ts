import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as Highcharts from 'highcharts';
import VariablePie from 'highcharts/modules/variable-pie';

@Component({
	selector: 'app-pricing',
	templateUrl: './pricing.component.html',
	styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
	ticket_amount = new FormControl(null);
	ticket_price = new FormControl(null);
	Highcharts: typeof Highcharts;
	chartOptions: Highcharts.Options;


	constructor() {
	}

	ngOnInit(): void {
		VariablePie(Highcharts)
		this.Highcharts = Highcharts
		this.chartOptions = {

			chart: {
				type: 'variablepie'
			},

			colors: ['#EA8585', '#EFA0A0', '#F1B1B1'],

			title: null,

			tooltip: {
				headerFormat: '',
				pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
					'Bedrag: <b>€{point.y}</b><br/>'
			},

			

			series: [{
				type: 'variablepie',
				minPointSize: 70,
				innerSize: '100%',
				zMin: 0,
				dataLabels: {
					distance: 0
				},

				data: [{
					name: 'Servicekosten',
					y: 0.59,
				}, {
					name: 'iDEAL Transactie',
					y: 0.29,
				}, {
					name: 'BTW',
					y: 0.12,
				}]
			}]
		}
	}

}
