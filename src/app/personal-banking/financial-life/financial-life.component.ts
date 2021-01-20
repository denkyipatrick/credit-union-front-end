import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-life',
  templateUrl: './financial-life.component.html',
  styleUrls: ['./financial-life.component.scss']
})
export class FinancialLifeComponent implements OnInit {
  baseUrl: String;

  constructor() {
    this.baseUrl = "/personal/your-financial-life"
  }

  ngOnInit(): void {
  }

}
