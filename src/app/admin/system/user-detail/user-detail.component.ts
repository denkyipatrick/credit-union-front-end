import { WithdrawDialogComponent } from './../withdraw-dialog/withdraw-dialog.component';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DepositDialogComponent } from '../deposit-dialog/deposit-dialog.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: any;
  userId: string;
  userAccounts: any[];
  accountTypes: any[];
  form: FormGroup;

  showForm: boolean;

  errorMessage: string;
  isFetchingUser: boolean;
  isErrorFetchingUser: boolean;

  isCreatingAccount: boolean;
  isErrorCreatingAccount: boolean;
  createAccountErrorMessage: string;

  constructor(
    private adminService: AdminService, 
    private dialog: MatDialog,
    private utitlityService: UtilityService,
     private activatedRoute: ActivatedRoute) {
    this.form = new FormGroup({
      accountTypeName: new FormControl(),
      accountNumber: new FormControl(),
      balance: new FormControl(),
      userId: new FormControl()
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];
      this.getUser();
      this.getAccountTypes();
    });
  }

  showDepositDialog(userAccount: any) {
    this.dialog.open(DepositDialogComponent, {
      data: {
        account: userAccount
      }
    })
    .afterClosed()
    .subscribe(transaction => {
      this.user.accounts.forEach(account => {
        if (account.id === transaction.userAccountId) {
          account.balance += +transaction.amount;
        }
      })
    })
  }
  
  showWithdrawDialog(userAccount: any) {
    this.dialog.open(WithdrawDialogComponent, {
      data: {
        account: userAccount
      }
    })
    .afterClosed()
    .subscribe(transaction => {
      this.user.accounts.forEach(account => {
        if (account.id === transaction.userAccountId) {
          account.balance -= +transaction.amount;
        }
      })
    })
  }

  toggleShowForm() {
    this.showForm = !this.showForm;
  }

  getAccountTypes() {
    this.utitlityService.getAccountTypes()
    .subscribe(accountTypes => {
      this.accountTypes = accountTypes;
    });
  }

  getUser() {
    this.errorMessage = '';
    this.isFetchingUser = true;
    this.isErrorFetchingUser = false;

    this.adminService.getUser(this.userId)
    .subscribe(user => {
      this.isFetchingUser = false;
      this.user = user;
    }, error => {
      this.isFetchingUser = false;
      this.isErrorFetchingUser = true;

      switch(error.status) {
        case 404:
          this.errorMessage = "Unable to find user";
          break;
        case 500:
          this.errorMessage = "An unexpected error has occurred. Please try again later.";
          break;
      }
    });
  }

  setPassword() {
    const pwd = prompt('Type password: ');

    if (!pwd) { return; }

    this.adminService.setUserPassword(this.user['id'], pwd)
    .subscribe(() => {
      alert('Password set nicely');
      this.user['password'] = pwd;
    }, error => {
      alert('Unable to change password');
    });
  }

  createAccount() {
    this.form.patchValue({'userId': this.userId});
    
    if (this.form.invalid) { return; }
    if (!confirm("Are you sure about this?")) { return; }

    this.isCreatingAccount = true;
    this.isErrorCreatingAccount = false;
    this.createAccountErrorMessage = '';

    this.adminService.createAccount(this.form.value)
    .subscribe(userAccount => {
      this.user['accounts'].unshift(userAccount);
      this.isCreatingAccount = false;
      alert('Successful');
    }, error => {
      this.isCreatingAccount = false;
      this.isErrorCreatingAccount = true;

      switch(error.status) {
        case 400:
          break;
        case 404:
          break;
        case 500:
          this.createAccountErrorMessage = 'An unexpected error has occured. Please try again later.';
          break;
      }

    });
  }

}
