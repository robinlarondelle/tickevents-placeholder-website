import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-new-home',
	templateUrl: './new-home.component.html',
	styleUrls: ['./new-home.component.css']
})
export class NewHomeComponent implements OnInit {

	constructor(
		private title: Title
	) { }

	ngOnInit(): void {
		this.title.setTitle("Tickevents | Home")
	}
}
