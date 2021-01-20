import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-management',
  templateUrl: './cash-management.component.html',
  styleUrls: ['./cash-management.component.scss']
})
export class CashManagementComponent implements OnInit {
  baseUrl: String;

  constructor() {
    this.baseUrl = "/business/cash-management";
  }

  ngOnInit(): void {
  }

}
