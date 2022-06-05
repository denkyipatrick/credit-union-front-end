import { UtilityService } from 'src/app/services/utility.service';
import { map, tap } from 'rxjs/operators';
import { BankingService } from './../banking.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AccountDetailResolver implements Resolve<any> {
  constructor(
    private bankingService: BankingService,
    private utilityService: UtilityService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const accountId = route.paramMap.get('id');
    return this.bankingService.getUserAccount(accountId).pipe(
      tap((account) =>
        account.transactions.map((tr) => {
          tr['amount'] =
            tr['amount'] * this.utilityService.selectedCurrency.rate;
          tr['createdAt'] = new Date(tr['createdAt']).toDateString();
          tr['parsedAmount'] = this.utilityService.parseNumberWithCommas(
            tr['amount'].toFixed(2)
          );

          return tr;
        })
      )
    );
  }
}
