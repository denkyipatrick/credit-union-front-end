import { tap } from 'rxjs/operators';
import { UtilityService } from './../services/utility.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class CurrencyResolver implements Resolve<any> {
  currencies: any[];
  constructor(private utilityService: UtilityService) {
    this.currencies = JSON.parse(localStorage.getItem('currencies')) || [];
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    if (this.currencies.length) {
      return of(this.currencies);
    }

    return this.utilityService.getCurrencies().pipe(
      tap((currencies) => {
        localStorage.setItem('currency', JSON.stringify(currencies[0]));
        localStorage.setItem('currencies', JSON.stringify(currencies));
      })
    );
  }
}
