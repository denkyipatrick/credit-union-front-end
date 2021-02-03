import { UtilityService } from './../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {
  baseUrl: String;
  
  constructor(private titleService: Title, private utilityService: UtilityService) {
    this.baseUrl = "/personal/personal-insurance";
  }

  ngOnInit(): void {
    this.titleService.setTitle(`Personal Insurance, Life, Flood, Renters | ` + 
    `${this.utilityService.bankName}`);
  }

}
