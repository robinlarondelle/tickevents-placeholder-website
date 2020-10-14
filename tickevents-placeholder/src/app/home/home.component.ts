import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
    distance: '150%',
    scale: 1,
    duration: 700,
    reset: false,
    delay: 300
  }

  constructor(
  ){}
}
