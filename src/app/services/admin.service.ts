import { ConstantsService } from './constants.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private constantsService: ConstantsService) { }

  public getUsers(): Observable<object[]> {
    return this.http.get<object[]>(`${this.constantsService.USERS_URL}`);
  }

  public getUser(id: string) {
    return this.http.get<object>(`${this.constantsService.USERS_URL}/${id}`);
  }

  public getUserAccounts(): Observable<object[]> {
    return this.http.get<object[]>(`${this.constantsService.USER_ACCOUNTS_URL}`);
  }

  public getAccountTypes(): Observable<object[]> {
    return this.http.get<object[]>(`${this.constantsService.ACCOUNT_TYPES_URL}`);
  }

  public setUserPassword(userId: string, pwd: string) {
    return this.http.put(`${this.constantsService.USERS_URL}/${userId}/setuserpassword`, {password: pwd})
  }

  public createAccount(data: object): Observable<object> {
    return this.http.post<object>(`${this.constantsService.USER_ACCOUNTS_URL}`, data);
  }

  public createAccountType(data: string) {
    return this.http.post<object>(`${this.constantsService.ACCOUNT_TYPES_URL}`, data);
  }

  public depositAmount(formData: any) {
    return this.http.post<object>(`${this.constantsService.TRANSACTIONS_URL}/deposit`, formData)
  }
  
  public withdrawAmount(formData: any) {
    return this.http.post<object>(`${this.constantsService.TRANSACTIONS_URL}/withdraw`, formData)
  }
}
