import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-construction-loans',
  templateUrl: './construction-loans.component.html',
  styleUrls: ['./construction-loans.component.scss']
})
export class ConstructionLoansComponent implements OnInit {

  constructor(private titleService: Title, private utilityService: UtilityService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(`Contruction & Lot Loans | One-Time Close ` + 
    `Construction Loans | ${this.utilityService.bankName}`)
  }
}
