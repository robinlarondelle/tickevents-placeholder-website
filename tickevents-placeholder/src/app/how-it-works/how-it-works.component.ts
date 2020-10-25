import { Component, OnInit } from '@angular/core';
declare var Rellax

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var rellax = new Rellax('.rellax', {
      breakpoints:[576, 768, 1200]
    });
  }

    
  scrollUp = {
    origin: 'bottom',
    distance: '50%',
    scale: 1,
    duration: 700,
    reset: false,
    viewFactor: 1
  }
  
}
