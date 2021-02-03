import { LeftPaneAccountItemComponent } from './left-pane-account-item/left-pane-account-item.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {
  user: any;
  drawerMode: string = "side";
  drawerOpened = false;
  smallerWindow = true;

  constructor(private router: Router) {
    this.user = JSON.parse(localStorage.getItem('user'));
    
    // this code support responsiveness and page adjustments.
    if (window.innerWidth <= 480) {
      this.drawerMode = "over";
      this.smallerWindow = true; // mobile window, show menu button
    } else if (window.innerWidth >= 481 && window.innerWidth < 901) {
      this.drawerMode = "over";
      this.drawerOpened = false;
      this.smallerWindow = true; // tablet window, show menu button
    } else {
      this.drawerMode = "side";
      this.drawerOpened = true;
      this.smallerWindow = false; // desktop window, do not show menu button
    }
  }

  ngOnInit(): void {
    this.router.navigate(['/banking/accounts', this.user.accounts[0].id])

  }

  logout() {
    localStorage.removeItem('user');
    window.location.href = "/";
  }

  windowResized() {
    if (window.innerWidth < 901) {
      this.drawerMode = "over";
      this.drawerOpened = false;
      this.smallerWindow = true;
    } else {
      this.drawerMode = "side";
      this.drawerOpened = true;
      this.smallerWindow = false;
    }
  }

  showAccountDetail(leftPaneAccountItemComponent: LeftPaneAccountItemComponent) {
    localStorage.setItem('selected-account', JSON.stringify(leftPaneAccountItemComponent.account))
    this.router.navigate(['banking/accounts', leftPaneAccountItemComponent.account.id])
  }

}
