import { UtilityService } from './../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cash-management',
  templateUrl: './cash-management.component.html',
  styleUrls: ['./cash-management.component.scss']
})
export class CashManagementComponent implements OnInit {
  baseUrl: String;
  
  constructor(private titleService: Title, private utilityService: UtilityService) {    
    this.baseUrl = "/business/cash-management";
  }

  ngOnInit(): void {
    this.titleService.setTitle(
      `Cash Management, Business Accounts, Payables, ` + 
      `Information Management | ${this.utilityService.bankName}`
    );
  }


}
