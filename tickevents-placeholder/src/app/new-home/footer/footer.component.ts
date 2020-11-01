import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-home-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class NewHomeFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('footer');
    
  }

}
