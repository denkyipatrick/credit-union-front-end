import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-property-casualty-insurance',
  templateUrl: './property-casualty-insurance.component.html',
  styleUrls: ['./property-casualty-insurance.component.scss']
})
export class PropertyCasualtyInsuranceComponent implements OnInit {

  constructor(private titleService: Title, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.titleService.setTitle(
      `Property & Casualty Insurance | Property & Liability | ` + 
      `Cyber Liability, Umbrella Insurance | ${this.utilityService.bankName}`
    );
  }

}
