import { UtilityService } from './../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-investing-retirement',
  templateUrl: './investing-retirement.component.html',
  styleUrls: ['./investing-retirement.component.scss']
})
export class InvestingRetirementComponent implements OnInit {
  baseUrl: String

  constructor(private title: Title, private utilityService: UtilityService) {
    this.baseUrl = "/personal/investment-retirement"
  }

  ngOnInit(): void {
    this.title.setTitle(`Investing & Retirement | ` + 
    `Build a Financial Plan | ${this.utilityService.bankName}`);
  }


}
