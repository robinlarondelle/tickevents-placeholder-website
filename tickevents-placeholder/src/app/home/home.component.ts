import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  scrollUpWithDelay = {
    origin: 'bottom',
    distance: '150%',
    delay: 1500,
    scale: 1,
    duration: 900,
    reset: false
  }

  scrollUp = {
    origin: 'bottom',
    distance: '50%',
    scale: 1,
    duration: 700,
    reset: false,
    viewFactor: 1
  }

  constructor(
    private titleService: Title,
  ){} 

  ngOnInit() {
    this.titleService.setTitle("Tickevents | Home")
  }
}
