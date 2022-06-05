import { UtilityService } from 'src/app/services/utility.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
})
export class AccountDetailComponent implements OnInit {
  account: any;
  accountId: string;
  parsedBalance: string;
  selectedCurrency: any;

  constructor(
    private route: ActivatedRoute,
    private utilityService: UtilityService
  ) {
    this.selectedCurrency = this.utilityService.selectedCurrency;
  }

  ngOnInit(): void {
    this.route.data.subscribe((d) => {
      this.account = d['account'];
      this.parsedBalance = this.utilityService.parseNumberWithCommas(
        Number(this.account?.balance * this.selectedCurrency?.rate).toFixed(2)
      );
    });
  }
}
