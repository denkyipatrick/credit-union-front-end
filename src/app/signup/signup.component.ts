import { UtilityService } from './../services/utility.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OkCancelDialogComponent } from '../ok-cancel-dialog/ok-cancel-dialog.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  accountTypes: any[];

  errorMessage: string;
  creatingUser: boolean;
  errorCreatingUser: boolean;

  constructor(
    private router: Router,
    private titleService: Title, 
    private dialogOpener:  MatDialog,
    private utilityService: UtilityService) {
    this.titleService.setTitle('Secure Connection to BSV Servers - The Bank of Southside Virginia');

    this.form = new FormGroup({
      fName: new FormControl(),
      lName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      accountTypeName: new FormControl()
    })
  }

  ngOnInit(): void {
    this.getAccountTypes();
  }

  private getAccountTypes() {
    this.utilityService.getAccountTypes()
    .subscribe(accountTypes => {
      this.accountTypes = accountTypes;
    }, error => {
      switch(error.status) {
        case 400:
          break;
        case 404:
          break;
        case 500:
          break;
      }
    });
  }

  public createAccount() {
    if (this.form.invalid) { return; }

    this.dialogOpener.open(OkCancelDialogComponent, {
      data: {
        title: "Create New Account?",
        okButtonText: 'YES',
        cancelButtonText: 'NO',
        message: "Are you sure you want to create a new Online Account with BSV?"
      }
    })
    .componentInstance.ok.subscribe(() => {
      this.errorMessage = '';
      this.creatingUser = true;
      this.errorCreatingUser = false;
  
      this.utilityService.createUser(this.form.value)
      .subscribe(user => {
        localStorage.setItem('user', JSON.stringify(user));
        alert('Hi, your registration has been completed');
        window.location.href = "/welcome";
      }, error => {
        alert('You have some errors');
        switch(error.status) {
          case 400:
            this.errorMessage = 'An account with your username or phone number already exists.';
            break;
          case 500:
            this.errorMessage = 'An unexpected error has occured. Please try again later.';
            break;
        }
      });
    });
  }

}
