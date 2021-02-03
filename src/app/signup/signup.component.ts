import { UtilityService } from './../services/utility.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
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
  nameForm: FormGroup;
  contactForm: FormGroup;
  accountForm: FormGroup;

  bankName: String;
  accountTypes: any[];

  errorMessage: string;
  creatingUser: boolean;
  errorCreatingUser: boolean;

  constructor(
    private router: Router,
    private titleService: Title, 
    private dialogOpener:  MatDialog,
    private utilityService: UtilityService) {
      this.bankName = utilityService.bankName;
      this.nameForm = new FormGroup({
        fName: new FormControl(),
        lName: new FormControl()
      });
      this.contactForm = new FormGroup({
        email: new FormControl(),
        phone: new FormControl(),        
      });
      this.accountForm = new FormGroup({
        phone: new FormControl(),
        accountTypeName: new FormControl()
      });

      this.form = new FormGroup({
        fName: new FormControl(),
        lName: new FormControl(),
        email: new FormControl(),
        phone: new FormControl(),
        accountTypeName: new FormControl()
      });
  }

  ngOnInit(): void {
    this.titleService.setTitle(`Secure Connection to ${this.utilityService.bankName} Servers`);

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

  submitNameForm(form: NgForm) {
    alert(form.value);
  }

  public createAccount() {
    if (this.form.invalid) { return; }

    this.dialogOpener.open(OkCancelDialogComponent, {
      data: {
        title: "Create New Account?",
        okButtonText: 'YES',
        cancelButtonText: 'NO',
        message: `Are you sure you want to create a new Online Account with ${this.utilityService.bankName}?`
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
