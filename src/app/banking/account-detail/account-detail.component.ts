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
  selectedCurrency: any;

  isLoading: boolean;
  isErrorLoading: boolean;
  networkErrorMessage: String;

  accountId: string;
  parsedBalance: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private utilityService: UtilityService
  ) {
    this.selectedCurrency = this.utilityService.selectedCurrency;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.accountId = params['id'];
      this.getAccountDetail();
    });
  }

  getAccountDetail() {
    this.isLoading = true;
    this.isErrorLoading = false;
    this.networkErrorMessage = '';

    this.utilityService.getUserAccount(this.accountId).subscribe(
      (account) => {
        this.account = account;
        this.isLoading = false;

        this.parsedBalance = this.utilityService.parseNumberWithCommas(
          (
            (this.account?.balance *
              this.utilityService.selectedCurrency?.rate) as Number
          ).toFixed(2)
        );
      },
      (error) => {
        this.isLoading = false;
        this.isErrorLoading = true;
      }
    );
  }
}
