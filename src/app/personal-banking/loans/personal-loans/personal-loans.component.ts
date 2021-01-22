import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-personal-loans',
  templateUrl: './personal-loans.component.html',
  styleUrls: ['./personal-loans.component.scss']
})
export class PersonalLoansComponent implements OnInit {

  constructor(private titleService: Title, private utilityService: UtilityService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(`Personal Loans & Lines of Credit | ${this.utilityService.bankName}`)
  }
}
