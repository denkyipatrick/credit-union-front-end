import { Observable } from 'rxjs';
import { ConstantsService } from './constants.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  bankName: String;
  shortBankName: String;
  applicationName: String;
  bankPhoneNumber: String;

  constructor(private http: HttpClient, 
    private constantsService: ConstantsService) {    
    this.shortBankName = "Hudson";
    this.bankPhoneNumber = "233 458 654 741";
    this.bankName = `${this.shortBankName} Bank`;
    this.applicationName = "Some Application Name";
  }

  public getAccountTypes(): Observable<object[]> {
    return this.http.get<object[]>(`${this.constantsService.ACCOUNT_TYPES_URL}`);
  }

  public createUser(data: object): Observable<object> {
    return this.http.post<object>(`${this.constantsService.USERS_URL}`, data);
  }

  public signin(data: object): Observable<object> {
    return this.http.post<object>(`${this.constantsService.USERS_URL}/auth`, data);
  }

  public getUserAccounts(userId: string) {
    return this.http.get<object[]>(`${this.constantsService.USERS_URL}/${userId}/accounts`);
  }

  public getUserAccount(userAccountId: string) {
    return this.http.get<object>(`${this.constantsService.USER_ACCOUNTS_URL}/${userAccountId}`)
  }

  public getAccountTransfers(userAccountId: string) {
    return this.http.get<object[]>(`${this.constantsService.USER_ACCOUNTS_URL}/${userAccountId}/transfers`);
  }

  searchTransferReceivers(accountIdOrNumber: string) {
    return this.http.get<object[]>(`${this.constantsService.USER_ACCOUNTS_URL}/search?q=${accountIdOrNumber}`)
  }

  public transferMoney(data: object) {
    return this.http.post<object>(`${this.constantsService.MONEY_TRANSFERS_URL}`, data);
  }

  public sendContactData(data: object) {
    return this.http.post<object>(`${this.constantsService.ADMIN_CONTACT_URL}`, data);
  }
}
