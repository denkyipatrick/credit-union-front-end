import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-payables-management',
  templateUrl: './payables-management.component.html',
  styleUrls: ['./payables-management.component.scss']
})
export class PayablesManagementComponent implements OnInit {
  shortBankName: String;

  constructor(private titleService: Title, private utilityService: UtilityService) {
    this.shortBankName = this.utilityService.shortBankName;
  }

  ngOnInit(): void {
    this.titleService.setTitle(`Payables Management | ACH Origination, ` + 
    `Business Credit Cards | ${this.utilityService.bankName}`);
  }
}
