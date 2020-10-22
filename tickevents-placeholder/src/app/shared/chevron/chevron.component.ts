import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chevron',
  templateUrl: './chevron.component.html',
  styleUrls: ['./chevron.component.css']
})
export class ChevronComponent implements OnInit {
  @Input() text: string

  constructor() { }

  ngOnInit(): void {
    this.text = this.text || "Scroll Down"
  }

}
