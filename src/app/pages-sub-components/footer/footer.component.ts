import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  appName: String
  bankName: String
  copyrightYear: number;

  constructor(private title: Title, public utilityService: UtilityService) {
    this.appName = utilityService.applicationName
    this.bankName = utilityService.shortBankName
    this.copyrightYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    this.title.setTitle("Personal Banking, Checking, Loans & Credit Cards | BSV");
  }
}
