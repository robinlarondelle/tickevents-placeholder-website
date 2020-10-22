import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as Highcharts from 'highcharts';
import VariablePie from 'highcharts/modules/variable-pie';
import { Title } from '@angular/platform-browser';

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

	scrollUpTitle = {
		origin: 'bottom',
		distance: '150%',
		scale: 1,
		duration: 700,
		reset: false,
		// delay: 300
	  }

	scrollUpDelay = {
		origin: 'bottom',
		distance: '150%',
		scale: 1,
		duration: 1500,
		reset: false,
		delay: 500
	  }

	priceboxScroll = {
		origin: 'bottom',
		distance: '150%',
		scale: 1,
		duration: 1500,
		reset: false,
		viewFactor: 0.4,
		afterReveal: (el) => {
			var a = document.getElementsByClassName('price-box-left')[0]
			a.classList.add('animate__animated')
			a.classList.add('animate__slideInRight')
			a.classList.add('opacity-1')

			var b = document.getElementsByClassName('price-box-right')[0]
			b.classList.add('animate__animated')
			b.classList.add('animate__slideInLeft')
			b.classList.add('opacity-1')
		}
	  }

	constructor(
		private titleService: Title,
	) {
	}

	ngOnInit(): void {
		this.titleService.setTitle("Tickevents | Pricing")

		VariablePie(Highcharts)
		this.Highcharts = Highcharts
		this.chartOptions = {

			chart: {
				type: 'variablepie',
				backgroundColor: null,
				style: {
					color: 'white',
					shadow: null,
					border: null
				}
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
					distance: 0,
					style: {
						border: null,
						fontFamily: 'montserrat',
						color: 'white',
						textOutline: null,
						fontWeight: '500'
					}
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
