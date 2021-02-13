import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event-header',
  templateUrl: './create-event-header.component.html',
  styleUrls: ['./create-event-header.component.css', './../shared/stylesheets/create-event.css']
})
export class CreateEventHeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToHome() {
    this.router.navigate(["./home"])
  }
}
