import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private router: Router,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Tickevents | 404")
  }

  returnHome() {
    this.router.navigate(["home"])
  }
}
