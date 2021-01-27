import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-voluntary-worksite-benefits',
  templateUrl: './voluntary-worksite-benefits.component.html',
  styleUrls: ['./voluntary-worksite-benefits.component.scss']
})
export class VoluntaryWorksiteBenefitsComponent implements OnInit {

  constructor(private titleService: Title, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.titleService.setTitle(
      `Voluntary and Worksite Benefits for Business | ${this.utilityService.bankName}`
    );
  }

}
