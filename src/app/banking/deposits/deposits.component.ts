import { OkDialogComponent } from './../../ok-dialog/ok-dialog.component';
import { UtilityService } from 'src/app/services/utility.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.scss']
})
export class DepositsComponent implements OnInit {
  @Input() deposits: any[];
  @Input() depositedAmount: number;

  tableColumns: string[] = ['accountNumber', 'amount', 'date']

  constructor(private dialogOpener: MatDialog) { }

  ngOnInit(): void {
  }

  deposit() {
    this.dialogOpener.open(OkDialogComponent, {
      data: {
        title: 'Error! Visit Our Branches',
        message: 'You cannot make an online deposit due to security concerns. ' + 
        'You can make a deposit by visiting any of our branches.'
      }
    });
  }

}
