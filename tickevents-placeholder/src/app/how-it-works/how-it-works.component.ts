import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
