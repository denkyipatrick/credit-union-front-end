import { tap } from 'rxjs/operators';
import { OkDialogComponent } from './../../ok-dialog/ok-dialog.component';
import { Title } from '@angular/platform-browser';
import { UtilityService } from './../../services/utility.service';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnChanges {
  userAccount: any;
  selectedCurrency: any;

  deposits: any[];
  transfers: any[];
  withdrawals: any[];
  @Input() transactions: any[];

  constructor(
    private dialogOpener: MatDialog,
    public utilityService: UtilityService
  ) {
    this.userAccount = JSON.parse(localStorage.getItem('selected-account'));
    this.selectedCurrency = this.utilityService.selectedCurrency;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['transactions']?.currentValue['length']) {
      const transactions = changes['transactions']?.currentValue;
      this.deposits = transactions.filter((t: any) => t['type'] === 'deposit');
      this.withdrawals = transactions.filter(
        (t: any) => t['type'] === 'withdrawal'
      );
    }
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
}
