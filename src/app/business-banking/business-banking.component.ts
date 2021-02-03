import { UtilityService } from 'src/app/services/utility.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-banking',
  templateUrl: './business-banking.component.html',
  styleUrls: ['./business-banking.component.scss']
})
export class BusinessBankingComponent implements OnInit {
  baseUrl: String;

  constructor(private title: Title, private utilityService: UtilityService) {
    this.baseUrl = "/business"
  }

  ngOnInit(): void {
    this.title.setTitle(`${this.utilityService.bankName} | Business Banking, Wealth, Insurance`);
  }

}
