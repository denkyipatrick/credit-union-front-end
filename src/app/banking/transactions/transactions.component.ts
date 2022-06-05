import { tap } from 'rxjs/operators';
import { OkDialogComponent } from './../../ok-dialog/ok-dialog.component';
import { Title } from '@angular/platform-browser';
import { UtilityService } from './../../services/utility.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  userAccount: any;
  selectedCurrency: any;

  isFetching: boolean;
  isErrorFetching: boolean;

  deposits: any[];
  transfers: any[];
  withdrawals: any[];
  transactions: any[];

  constructor(
    private title: Title,
    private dialogOpener: MatDialog,
    public utilityService: UtilityService
  ) {
    this.userAccount = JSON.parse(localStorage.getItem('selected-account'));
    this.selectedCurrency = this.utilityService.selectedCurrency;
  }

  ngOnInit(): void {
    this.title.setTitle('Your overall transactions made');
    this.fetchTransactions();
  }

  makeDeposit() {
    this.dialogOpener.open(OkDialogComponent, {
      data: {
        title: 'Error! Visit Our Branches',
        message:
          'You cannot make an online deposit due to security concerns. ' +
          'You can make a deposit via our ATM machines or by visiting any of our branches.',
      },
    });
  }

  makeWithdrawal() {
    this.dialogOpener.open(OkDialogComponent, {
      data: {
        title: 'Error! Visit Our Branches',
        message:
          'You cannot make an online withdrawal due to security concerns. ' +
          'You can make a withdrawal by using our ATM machines or visiting any of our branches.',
      },
    });
  }

  makeTransaction(actionType: string) {
    this.dialogOpener.open(OkDialogComponent, {
      data: {
        title: 'Error! Visit Our Branches',
        message:
          `You cannot make an online ${actionType} due to security concerns. ` +
          `You can make a ${actionType} by visiting any of our branches.`,
      },
    });
  }

  fetchTransactions() {
    this.utilityService
      .getUserAccountTransactions(this.userAccount['id'])
      .pipe(
        tap((transactions) => {
          return transactions.map((tr) => {
            tr['amount'] =
              tr['amount'] * this.utilityService.selectedCurrency.rate;
            tr['createdAt'] = new Date(tr['createdAt']).toDateString();
            tr['parsedAmount'] = this.utilityService.parseNumberWithCommas(
              tr['amount'].toFixed(2)
            );
            return tr;
          });
        })
      )
      .subscribe(
        (transactions) => {
          this.transactions = transactions;
          this.deposits = transactions.filter((t) => t['type'] === 'deposit');
          this.withdrawals = transactions.filter(
            (t) => t['type'] === 'withdrawal'
          );
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
