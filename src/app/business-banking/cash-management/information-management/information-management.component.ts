import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-information-management',
  templateUrl: './information-management.component.html',
  styleUrls: ['./information-management.component.scss']
})
export class InformationManagementComponent implements OnInit {

  constructor(private titleService: Title, private utilityService: UtilityService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(
      `Information Management | ${this.utilityService.bankName}`
    );
  }

}
