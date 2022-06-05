import { BankingService } from './banking.service';
import { UtilityService } from 'src/app/services/utility.service';
import { LeftPaneAccountItemComponent } from './left-pane-account-item/left-pane-account-item.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent implements OnInit {
  user: any;
  currencies: any[];
  bankAccounts: any[];
  selectedCurrency: any;

  drawerMode: string = 'side';
  drawerOpened = false;
  smallerWindow = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bankingService: BankingService
  ) {
    this.user = this.bankingService.user;
    this.selectedCurrency = JSON.parse(localStorage.getItem('currency'));

    // this code support responsiveness and page adjustments.
    if (window.innerWidth <= 480) {
      this.drawerMode = 'over';
      this.smallerWindow = true; // mobile window, show menu button
    } else if (window.innerWidth >= 481 && window.innerWidth < 901) {
      this.drawerMode = 'over';
      this.drawerOpened = false;
      this.smallerWindow = true; // tablet window, show menu button
    } else {
      this.drawerMode = 'side';
      this.drawerOpened = true;
      this.smallerWindow = false; // desktop window, do not show menu button
    }
  }

  ngOnInit(): void {
    this.currencies = this.route.snapshot.data['currencies'];
    this.bankAccounts = this.route.snapshot.data['bankAccounts'];
    this.router.navigate(['/banking/accounts', this.bankAccounts[0].id]);
  }

  logout() {
    localStorage.clear();
    window.location.href = '/';
  }

  windowResized() {
    if (window.innerWidth < 901) {
      this.drawerMode = 'over';
      this.drawerOpened = false;
      this.smallerWindow = true;
    } else {
      this.drawerMode = 'side';
      this.drawerOpened = true;
      this.smallerWindow = false;
    }
  }

  changeCurrency(currency: any) {
    localStorage.setItem('currency', JSON.stringify(currency));
    this.selectedCurrency = currency;
    location.reload();
  }

  showAccountDetail(
    leftPaneAccountItemComponent: LeftPaneAccountItemComponent
  ) {
    localStorage.setItem(
      'selected-account',
      JSON.stringify(leftPaneAccountItemComponent.account)
    );
    this.router.navigate([
      'banking/accounts',
      leftPaneAccountItemComponent.account.id,
    ]);
  }
}
