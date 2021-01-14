import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
	selector: 'app-new-home-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class NewHomeHeaderComponent implements OnInit {
	@Input() logoColor: string
	navbarClass: string

	constructor() { }

	ngOnInit(): void {
		this.logoColor = this.logoColor || "white"
		
		switch(this.logoColor) {
			case "white": this.navbarClass = "white-logo"
			case "black": this.navbarClass = "black-logo"
		}
	}

	changeBackground = () => {
		const button = document.querySelector('.navbar-toggler');
		let navbar

		console.log(this.logoColor);
		

		switch(this.logoColor) {
			case "white": navbar = document.querySelector(".white-logo"); console.log("appending white")
			case "black": navbar = document.querySelector(".black-logo"); console.log("appending black")
		}

		console.log(navbar);
		
		// if (button.attributes.getNamedItem("aria-expanded").value != 'true') {
		// 	navbar.classList.add("bg-white")
		// 	navbar.classList.remove("bg-none")
		// } else {
		// 	navbar.classList.remove("bg-white");
		// 	navbar.classList.add("bg-none")
		// }
	}
}
