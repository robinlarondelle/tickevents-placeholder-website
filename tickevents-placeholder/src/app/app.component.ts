import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    private router: Router
  ) {
    const navEndEvent$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    );
    navEndEvent$.subscribe((e: NavigationEnd) => {
      gtag('config', environment.gtag , {
        'page_path': e.urlAfterRedirects
      });
    });
  }

  onActivate(event) {
    window.scroll(0, 0);
  }
}
