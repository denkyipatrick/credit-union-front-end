import { UtilityService } from 'src/app/services/utility.service';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-transaction-type-detail',
  templateUrl: './transaction-type-detail.component.html',
  styleUrls: ['./transaction-type-detail.component.scss'],
})
export class TransactionTypeDetailComponent implements OnChanges {
  @Input() transactions: any[];
  @Input() isShowTransactionType: boolean;
  @Input() transactionType: string = 'transactions';

  currency: any;
  transactedAmount: number;
  transactedAmountString: string;

  constructor(private utilityService: UtilityService) {
    this.currency = this.utilityService.selectedCurrency;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const inputtedTransactions: any[] = changes['transactions'].currentValue;

    if (inputtedTransactions && inputtedTransactions.length) {
      this.transactedAmount = inputtedTransactions.reduce((total, current) => {
        total += current.amount;
        return total;
      }, 0);

      this.transactedAmountString = this.utilityService.parseNumberWithCommas(
        this.transactedAmount.toFixed(2)
      );
    }
  }
}
