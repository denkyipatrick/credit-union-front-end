import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-business-loans',
  templateUrl: './business-loans.component.html',
  styleUrls: ['./business-loans.component.scss']
})
export class BusinessLoansComponent implements OnInit {

  constructor(private titleService: Title, private utilityService: UtilityService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(
      `Information Management | ${this.utilityService.bankName}`
    );
  }

}
