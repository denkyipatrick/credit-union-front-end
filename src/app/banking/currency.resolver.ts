import { tap } from 'rxjs/operators';
import { UtilityService } from './../services/utility.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CurrencyResolver implements Resolve<boolean> {
  constructor(private utilityService: UtilityService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | any> {
    return this.utilityService.getCurrencies().pipe(
      tap((currencies) => {
        localStorage.setItem('currency', JSON.stringify(currencies[0]));
        localStorage.setItem('currencies', JSON.stringify(currencies));
      })
    );
  }
}
