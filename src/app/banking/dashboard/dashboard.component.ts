import { OkDialogComponent } from './../../ok-dialog/ok-dialog.component';
import { Title } from '@angular/platform-browser';
import { UtilityService } from './../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any;
  userAccount: any;

  errorMessage: string;
  fetchingAccountData: boolean;
  errorFetchingAccountData: boolean;

  totalDepositedAmount: number;
  totalWithdrawnAmount: number;
  totalTransferedAmount: number;

  constructor(private title: Title, private dialogOpener: MatDialog, private utilityService: UtilityService) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.totalDepositedAmount = 0;
    this.totalWithdrawnAmount = 0;
    this.totalTransferedAmount = 0;
  }

  ngOnInit(): void {
    this.title.setTitle('Dashboard - Bank of Southside Virginia');
    this.getAccounts();
  }

  deposit() {
    this.dialogOpener.open(OkDialogComponent, {
      data: {
        title: 'Error! Visit Our Branches',
        message: 'You cannot make an online deposit due to security concerns. ' + 
        'You can make a deposit by visiting any of our branches.'
      }
    })
  }

  getAccounts() {
    this.errorMessage = '';
    this.fetchingAccountData = true;
    this.errorFetchingAccountData = false;

    this.utilityService.getUserAccounts(this.user['id'])
    .subscribe(userAccounts => {
      this.fetchingAccountData = false;

      this.userAccount = userAccounts[0];

      this.userAccount['transactions']
      .filter(transaction => transaction['type'] == 'deposit')
      .forEach(deposit => {
        this.totalDepositedAmount += deposit['amount']
      });
      
      this.userAccount['transactions']
      .filter(transaction => transaction['type'] == 'withdrawal')
      .forEach(withdrawal => {
        this.totalDepositedAmount += withdrawal['amount']
      });
      
      this.userAccount['transfers']
      .forEach(transfer => {
        this.totalTransferedAmount += transfer['amount'];
        return transfer;
      });

      localStorage.setItem('selected-account', JSON.stringify(this.userAccount));
    }, error => {
      this.fetchingAccountData = false;
      this.errorFetchingAccountData = true;

      switch(error.status) {
        case 404:
          this.errorMessage = "Your account could not be located. Please log in.";
          break;
        case 500:
          this.errorMessage = "An unexpected error has occurred. Please try again later.";
          break;
      }
    })
  }

}
