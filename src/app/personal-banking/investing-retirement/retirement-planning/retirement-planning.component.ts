import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-retirement-planning',
  templateUrl: './retirement-planning.component.html',
  styleUrls: ['./retirement-planning.component.scss']
})
export class RetirementPlanningComponent implements OnInit {
  shortBankName: String;

  constructor(private titleService: Title, private utilityService: UtilityService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(`Retirement Planning | How to start planning ` + 
    `for retirement | ${this.utilityService.bankName}`);
  }

}
