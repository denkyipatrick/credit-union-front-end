import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-commercial-real-estate',
  templateUrl: './commercial-real-estate.component.html',
  styleUrls: ['./commercial-real-estate.component.scss']
})
export class CommercialRealEstateComponent implements OnInit {

  constructor(private titleService: Title, private utilityService: UtilityService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(
      `Commercial Real Estate, Financing Options | ${this.utilityService.bankName}`
    );
  }


}
