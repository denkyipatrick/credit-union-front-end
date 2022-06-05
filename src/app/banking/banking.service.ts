import { ConstantsService } from './../services/constants.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BankingService {
  user: any;

  constructor(
    private http: HttpClient,
    private constantsService: ConstantsService
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  public getUserAccounts(userId: string) {
    return this.http.get<object[]>(
      `${this.constantsService.USERS_URL}/${userId}/accounts`
    );
  }

  public getUserAccount(userAccountId: string) {
    return this.http.get<object>(
      `${this.constantsService.USER_ACCOUNTS_URL}/${userAccountId}`
    );
  }

  public getAccountTransfers(userAccountId: string) {
    return this.http.get<object[]>(
      `${this.constantsService.USER_ACCOUNTS_URL}/${userAccountId}/transfers`
    );
  }

  public getUserAccountTransactions(userAccountId: string) {
    return this.http.get<object[]>(
      `${this.constantsService.USER_ACCOUNTS_URL}/${userAccountId}/transactions`
    );
  }

  public getUserAccountDeposits(userAccountId: string) {
    return this.http.get<object[]>(
      `${this.constantsService.USER_ACCOUNTS_URL}/${userAccountId}/deposits`
    );
  }

  public getUserAccountWithdrawals(userAccountId: string) {
    return this.http.get<object[]>(
      `${this.constantsService.USER_ACCOUNTS_URL}/${userAccountId}/withdrawals`
    );
  }

  searchTransferReceivers(accountIdOrNumber: string) {
    return this.http.get<object[]>(
      `${this.constantsService.USER_ACCOUNTS_URL}/search?q=${accountIdOrNumber}`
    );
  }

  public transferMoney(data: object) {
    return this.http.post<object>(
      `${this.constantsService.MONEY_TRANSFERS_URL}`,
      data
    );
  }
}
