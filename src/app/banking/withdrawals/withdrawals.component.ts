import { OkDialogComponent } from './../../ok-dialog/ok-dialog.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-withdrawals',
  templateUrl: './withdrawals.component.html',
  styleUrls: ['./withdrawals.component.scss']
})
export class WithdrawalsComponent implements OnInit {
  @Input() withdrawals: any[]
  @Input() withdrawnAmount: number;
  tableColumns: string[] = ['accountNumber', 'amount', 'date']

  constructor(private dialogOpener: MatDialog) {
    this.withdrawnAmount = 0;
  }

  ngOnInit(): void {
  }
  
  makeWithdrawal() {
    this.dialogOpener.open(OkDialogComponent, {
      data: {
        title: 'Error! Visit Our Branches',
        message: 'You cannot make an online withdrawal due to security concerns. ' + 
        'You can make a withdrawal by using your our ATM machines or visiting any of our branches.'
      }
    });
  }

}
