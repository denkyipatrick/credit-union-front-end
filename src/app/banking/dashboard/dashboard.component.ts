import { BankingService } from './../banking.service';
import { OkDialogComponent } from './../../ok-dialog/ok-dialog.component';
import { Title } from '@angular/platform-browser';
import { UtilityService } from './../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
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

  constructor(
    private title: Title,
    private dialogOpener: MatDialog,
    private bankingService: BankingService
  ) {
    this.user = this.bankingService.user;
    this.totalDepositedAmount = 0;
    this.totalWithdrawnAmount = 0;
    this.totalTransferedAmount = 0;
  }

  ngOnInit(): void {
    this.title.setTitle('Dashboard - Bank of Southside Virginia');
  }

  deposit() {
    this.dialogOpener.open(OkDialogComponent, {
      data: {
        title: 'Error! Visit Our Branches',
        message:
          'You cannot make an online deposit due to security concerns. ' +
          'You can make a deposit by visiting any of our branches.',
      },
    });
  }
}
