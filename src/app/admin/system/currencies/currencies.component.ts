import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilityService } from 'src/app/services/utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {
  currencies: any[];

  constructor(private snackBar: MatSnackBar, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.getCurrencies();
  }

  getCurrencies() {
    this.utilityService.getCurrencies()
    .subscribe(currencies => {
      this.currencies = currencies
    }, error => {
      console.log(error);
    });
  }

  changeRate(currency: any, rate: number) {
    this.utilityService.changeCurrencyRate(currency.id, rate)
    .subscribe(res => {
      this.snackBar.open('Rate Updated', 'OK', {
        duration: 5000
      });
      
      this.currencies = this.currencies.map(cur => {
        if (cur.id == currency.id) { cur.rate = rate }
        return cur;
      });
    }, error => {
      console.log(error);
    });
  }

}
