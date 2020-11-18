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
		const button = document.querySelector('.navbar-toggler');
		const nav = document.querySelector('nav');

		if (button.attributes.getNamedItem("aria-expanded").value != 'true') {
			nav.classList.add("bg-white")
			nav.classList.remove("bg-none")
		} else {
			nav.classList.remove("bg-white");
			nav.classList.add("bg-none")
		}
	}
}
