import { UtilityService } from './../../services/utility.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
})
export class TransactionsTableComponent implements OnInit {
  selectedCurrency: any;

  @Input() isShowType = false;
  @Input() transactions: any[];
  @Input() transactedAmount: number;

  transactionsTableColumns = ['accountNumber', 'amount', 'type', 'date'];

  constructor(public utilityService: UtilityService) {
    this.selectedCurrency = this.utilityService.selectedCurrency;
  }

  ngOnInit(): void {}
}
