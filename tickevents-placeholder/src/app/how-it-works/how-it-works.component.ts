import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var Rellax

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {

  constructor(
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Tickevents | Hoe het werkt")
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
