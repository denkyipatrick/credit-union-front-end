import { UtilityService } from 'src/app/services/utility.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {
  account: any;
  selectedCurrency: any;
  depositTransactions: any[] = [];
  withdrawalTransactions: any[] = [];

  accountTransactions: any[];

  totalDepositedAmount: number;
  totalWithdrawnAmount: number;
  totalTransactedAmount: number;


  isLoading: boolean;
  isErrorLoading: boolean;
  networkErrorMessage: String;

  accountId: string;

  constructor(private activatedRoute: ActivatedRoute, private utilityService: UtilityService) {
    this.totalDepositedAmount = 0;
    this.totalWithdrawnAmount = 0;
    this.totalTransactedAmount = 0;

    this.selectedCurrency = this.utilityService.selectedCurrency;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.accountId = params['id'];

      this.getAccountDetail();
    })
  }

  getAccountDetail() {
    this.isLoading = true;
    this.isErrorLoading = false;
    this.networkErrorMessage = "";

    this.utilityService.getUserAccount(this.accountId)
    .subscribe(account => {
      console.log(account);
      this.account = account;
      this.isLoading = false;

      this.account.transactions.forEach(transaction => {
          // this.totalTransferedAmount += transfer['amount'];
          transaction['createdAt'] = new Date(transaction['createdAt']).toDateString();
          this.totalTransactedAmount += transaction.amount;

          return transaction;
      });

      this.account.deposits.forEach(deposit => {
        deposit['createdAt'] = new Date(deposit['createdAt']).toDateString();
        this.totalDepositedAmount += deposit.amount;
      });

      
      this.account.withdrawals.forEach(withdrawals => {
        withdrawals['createdAt'] = new Date(withdrawals['createdAt']).toDateString();
        this.totalWithdrawnAmount += withdrawals.amount;
      });
    }, error => {
      this.isLoading = false;
      this.isErrorLoading = true;

      console.error(error);
    });
  }

  
  getAccountDetails() {
    // this.isFetching = true;
    // this.isErrorFetching = false;

    // this.utilityService.getUserAccount(this.userAccount['id'])
    // .subscribe(userAccount => {
      // this.isFetching = false;
      // this.userAccount = userAccount;

      // console.log(this.userAccount['transactions']);
      // this.transactions = this.userAccount['transactions'];

      // this.transfers = this.userAccount['transfers'];

      // this.transfers.forEach(transfer => {
      //   this.totalTransferedAmount += transfer['amount'];
      //   transfer['createdAt'] = new Date(transfer['createdAt']).toDateString();
      //   return transfer;
      // })

      // this.deposits = this.userAccount['transactions'].filter(transaction => {
      //   if (transaction['type'] == 'deposit') {
      //     this.totalDepositedAmount += transaction['amount'];
      //     transaction['createdAt'] = new Date(transaction['createdAt']).toDateString();
      //     return transaction;
      //   }
      // });

      // this.withdrawals = this.userAccount['transactions'].filter(transaction => {
      //   if ( transaction['type'] == 'withdrawal') {
      //     this.totalWithdrawnAmount += transaction['amount'];
      //     transaction['createdAt'] = new Date(transaction['createdAt']).toDateString();
      //     return transaction;
      //   }
      // });
    // }, error => {
      // this.isFetching = false;
      // this.isErrorFetching = true;
    // });
  }

}
