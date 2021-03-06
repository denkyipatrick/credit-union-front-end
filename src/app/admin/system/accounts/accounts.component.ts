import { UtilityService } from './../../../services/utility.service';
import { Title } from '@angular/platform-browser';
import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit {
  userAccounts: any[];
  isFetching: boolean;
  errorMessage: string;
  isErrorFetching: boolean;

  constructor(
    private title: Title,
    private utilityService: UtilityService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.title.setTitle(`Accounts | ${this.utilityService.applicationName}`);

    this.getAccounts();
  }

  getAccounts() {
    this.isFetching = true;
    this.errorMessage = '';
    this.isErrorFetching = false;

    this.adminService.getUserAccounts().subscribe(
      (userAccounts) => {
        this.isFetching = false;
        this.userAccounts = userAccounts;
      },
      (error) => {
        this.isFetching = false;
        this.isErrorFetching = true;

        this.errorMessage =
          'An unexpected error has occurred. Please try again later.';
      }
    );
  }
}
