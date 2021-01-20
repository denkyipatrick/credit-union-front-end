import { OkDialogComponent } from './../../ok-dialog/ok-dialog.component';
import { Title } from '@angular/platform-browser';
import { UtilityService } from './../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  userAccount: any;
  isFetching: boolean;
  isErrorFetching: boolean;

  deposits: any[];
  transfers: any[];
  withdrawals: any[];

  totalDepositedAmount = 0;
  totalWithdrawnAmount = 0;
  totalTransferedAmount = 0;

  constructor(private title: Title, private dialogOpener: MatDialog, private utilityService: UtilityService) {
    this.userAccount = JSON.parse(localStorage.getItem('selected-account'));
  }

  ngOnInit(): void {
    this.title.setTitle("Transactions - Bank of Southside Virginia");
    this.getAccountDetails();
  }

  makeTransaction(actionType: string) {  
    this.dialogOpener.open(OkDialogComponent, {
      data: {
        title: 'Error! Visit Our Branches',
        message: `You cannot make an online ${actionType} due to security concerns. ` + 
        `You can make a ${actionType} by visiting any of our branches.`
      }
    })
  }

  getAccountDetails() {
    this.isFetching = true;
    this.isErrorFetching = false;

    this.utilityService.getUserAccount(this.userAccount['id'])
    .subscribe(userAccount => {
      this.isFetching = false;
      this.userAccount = userAccount;

      this.transfers = this.userAccount['transfers'];

      this.transfers.forEach(transfer => {
        this.totalTransferedAmount += transfer['amount'];
        transfer['createdAt'] = new Date(transfer['createdAt']).toDateString();
        return transfer;
      })

      this.deposits = this.userAccount['transactions'].filter(transaction => {
        if (transaction['type'] == 'deposit') {
          this.totalDepositedAmount += transaction['amount'];
          transaction['createdAt'] = new Date(transaction['createdAt']).toDateString();
          return transaction;
        }
      });

      this.withdrawals = this.userAccount['transactions'].filter(transaction => {
        if ( transaction['type'] == 'withdrawal') {
          this.totalWithdrawnAmount += transaction['amount'];
          transaction['createdAt'] = new Date(transaction['createdAt']).toDateString();
          return transaction;
        }
      });
    }, error => {
      this.isFetching = false;
      this.isErrorFetching = true;
    });
  }

}
