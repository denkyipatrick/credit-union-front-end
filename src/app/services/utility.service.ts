import { Observable } from 'rxjs';
import { ConstantsService } from './constants.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  bankName: String;
  shortBankName: String;
  applicationName: String;
  bankPhoneNumber: String;
  selectedCurrency: any;
  euroSymbol: string;
  dollarSymbol: string;

  constructor(
    private http: HttpClient,
    private constantsService: ConstantsService
  ) {
    this.selectedCurrency = JSON.parse(localStorage.getItem('currency'));

    this.euroSymbol = '€';
    this.dollarSymbol = '$';

    this.shortBankName = 'Lollands';
    this.bankPhoneNumber = '+45 5492 1134';
    this.bankName = `${this.shortBankName} Credit Union`;
    this.applicationName = `${this.bankName} - Online Banking Platform`;
  }

  parseNumberWithCommas(numberString: string): string {
    return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  public getAccountTypes(): Observable<object[]> {
    return this.http.get<object[]>(
      `${this.constantsService.ACCOUNT_TYPES_URL}`
    );
  }

  public createUser(data: object): Observable<object> {
    return this.http.post<object>(`${this.constantsService.USERS_URL}`, data);
  }

  public signin(data: object): Observable<object> {
    return this.http.post<object>(
      `${this.constantsService.USERS_URL}/auth`,
      data
    );
  }

  public getCurrencies() {
    return this.http.get<any[]>(`${this.constantsService.CURRENCIES_URL}`);
  }

  public getCurrency(currencyId: string) {
    return this.http.get<any>(
      `${this.constantsService.CURRENCIES_URL}/${currencyId}`
    );
  }

  public changeCurrencyRate(currencyId: string, rate: number) {
    return this.http.put<any>(
      `${this.constantsService.CURRENCIES_URL}/${currencyId}`,
      { rate: rate }
    );
  }

  public sendContactData(data: object) {
    return this.http.post<object>(
      `${this.constantsService.ADMIN_CONTACT_URL}`,
      data
    );
  }
}
