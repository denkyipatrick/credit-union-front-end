import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {
  baseUrl: String;

  constructor() {
    this.baseUrl = "/personal/banking"
  }

  ngOnInit(): void {
  }

}
