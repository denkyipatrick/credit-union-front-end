import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-and-condo',
  templateUrl: './home-and-condo.component.html',
  styleUrls: ['./home-and-condo.component.scss']
})
export class HomeAndCondoComponent implements OnInit {

  constructor(private titleService: Title, private utilityService: UtilityService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(`Home & Condo Insurance | ` + 
    `What does homeowners insurance cover? | ` + 
    `${this.utilityService.bankName}`);
  }
}
