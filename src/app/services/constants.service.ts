import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  private SERVER_URL: string;
  public USERS_URL: string;
  public ACCOUNTS_URL: string;
  public USER_ACCOUNTS_URL: string;
  public ADMIN_CONTACT_URL: string;
  public ACCOUNT_TYPES_URL: string;
  public MONEY_TRANSFERS_URL: string;
  public TRANSACTIONS_URL: string;

  constructor() {
    this.SERVER_URL = `http://localhost:5051/api/v1`;
    // this.SERVER_URL = `https://bsvnett.com:5051/api/v1`;
    this.USERS_URL = `${this.SERVER_URL}/users`;
    this.ACCOUNTS_URL = `${this.SERVER_URL}/accounts`;
    this.ADMIN_CONTACT_URL = `${this.SERVER_URL}/admincontacts`;
    this.USER_ACCOUNTS_URL = `${this.SERVER_URL}/useraccounts`;
    this.ACCOUNT_TYPES_URL = `${this.SERVER_URL}/accounttypes`;
    this.MONEY_TRANSFERS_URL = `${this.SERVER_URL}/moneytransfers`;
    this.TRANSACTIONS_URL = `${this.SERVER_URL}/transactions`;
  }
}
