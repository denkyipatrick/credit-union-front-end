import { Title } from '@angular/platform-browser';
import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-account-types',
  templateUrl: './account-types.component.html',
  styleUrls: ['./account-types.component.scss'],
})
export class AccountTypesComponent implements OnInit {
  showForm: boolean;
  accountTypes: any[];
  isFetching: boolean;
  errorMessage: string;
  isErrorFetching: boolean;

  form: FormGroup;
  savingErrorMessage: string;
  isCreatingAccountType: boolean;
  isErrorCreatingAccountType: boolean;

  constructor(
    private title: Title,
    private utilityService: UtilityService,
    private adminService: AdminService
  ) {
    this.form = new FormGroup({
      name: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.title.setTitle(
      `Account Types | ${this.utilityService.applicationName}`
    );

    this.getAccountTypes();
  }

  toggleShowForm() {
    this.showForm = !this.showForm;
  }

  getAccountTypes() {
    this.isFetching = true;
    this.errorMessage = '';
    this.isErrorFetching = false;

    this.adminService.getAccountTypes().subscribe(
      (accountTypes) => {
        this.isFetching = false;
        this.accountTypes = accountTypes;
      },
      (error) => {
        this.isFetching = false;
        this.isErrorFetching = true;

        console.error(error);
        switch (error.status) {
          case 400:
            break;
          case 404:
            break;
          case 500:
            break;
        }
      }
    );
  }

  createAccountType() {
    if (this.form.invalid) {
      return;
    }

    if (!confirm('Are you sure?')) {
      return;
    }

    this.savingErrorMessage = '';
    this.isCreatingAccountType = true;
    this.isErrorCreatingAccountType = false;

    this.adminService.createAccountType(this.form.value).subscribe(
      (accountType) => {
        this.accountTypes.unshift(accountType);
        this.isCreatingAccountType = false;
        this.form.setValue({ name: '' });
      },
      (error) => {
        console.log(error);
        switch (error.status) {
          case 400:
            break;
          case 404:
            break;
          case 500:
            break;
        }
      }
    );
  }
}
