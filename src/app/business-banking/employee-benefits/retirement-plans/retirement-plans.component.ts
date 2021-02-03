import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-retirement-plans',
  templateUrl: './retirement-plans.component.html',
  styleUrls: ['./retirement-plans.component.scss']
})
export class RetirementPlansComponent implements OnInit {

  constructor(private titleService: Title, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.titleService.setTitle(
      `Business Retirement Planning | ` + 
      `Employer sponsored retirement plans | ${this.utilityService.bankName}`
    );
  }

}
