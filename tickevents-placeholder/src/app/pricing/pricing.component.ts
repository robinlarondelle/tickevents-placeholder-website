import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  ticket_amount = new FormControl(null);
  ticket_price = new FormControl(null);

  constructor() { }

  ngOnInit(): void {
  }

}
