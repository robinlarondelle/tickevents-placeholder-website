import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-new-home-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class NewHomeHeaderComponent implements OnInit {
	@Input() logoColor: string

	constructor() { }

	ngOnInit(): void {
		this.logoColor = this.logoColor || "white"
	}

	changeBackground = () => {
		console.log("change background called");
		
		const button = document.querySelector('.navbar-toggler');
		const nav = document.querySelector('nav');

		if (button.attributes.getNamedItem("aria-expanded").value != 'true') {
			console.log("adding white background");
			
			
			nav.classList.add("bg-white")
			nav.classList.remove("bg-none")
		} else {
			console.log("removing white background");
			
			console.log(nav.classList);
			nav.classList.remove("bg-white");
			nav.classList.add("bg-none")
			console.log(nav.classList);

		}
	}
}
