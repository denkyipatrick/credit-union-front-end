import { BankingService } from './banking.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class BankingResolver implements Resolve<boolean | any> {
  constructor(private bankingService: BankingService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | any> {
    const user: any = JSON.parse(localStorage.getItem('user'));
    return this.bankingService.getUserAccounts(user.id).pipe(
      tap((accounts) => {
        localStorage.setItem('accounts', JSON.stringify(accounts));
        localStorage.setItem('selected-account', JSON.stringify(accounts[0]));
      })
    );
  }
}
