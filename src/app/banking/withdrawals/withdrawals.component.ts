import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdrawals',
  templateUrl: './withdrawals.component.html',
  styleUrls: ['./withdrawals.component.scss']
})
export class WithdrawalsComponent implements OnInit {
  @Input() withdrawals: any[]
  @Input() withdrawnAmount: number;
  tableColumns: string[] = ['accountNumber', 'amount', 'date']

  constructor() {
    this.withdrawnAmount = 0;
  }

  ngOnInit(): void {
  }

}
