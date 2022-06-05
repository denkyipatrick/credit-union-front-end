import { UtilityService } from './../services/utility.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  form: FormGroup;
  isWorking: boolean;
  errorMessage: string;
  isErrorWorking: boolean;

  constructor(private title: Title, private utilityService: UtilityService) {
    this.title.setTitle(
      `Secure Connection to Our Servers - ${this.utilityService.bankName}`
    );
    this.form = new FormGroup({
      id: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {}

  signin() {
    if (this.form.invalid) {
      return;
    }

    this.isWorking = true;
    this.errorMessage = '';
    this.isErrorWorking = false;

    this.utilityService.signin(this.form.value).subscribe(
      (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        if (user['accounts']['length'] > 0) {
          window.location.href = '/banking';
        } else {
          window.location.href = '/welcome';
        }
      },
      (error) => {
        this.isWorking = false;
        this.isErrorWorking = true;

        switch (error.status) {
          case 400:
            this.errorMessage = 'Sorry, your password is not correct.';
            break;
          case 404:
            this.errorMessage =
              'Your email or phone number could not be found.';
            break;
          case 500:
            this.errorMessage =
              'Sorry, an unexpected error has occurred. Please try again later.';
            break;
        }
      }
    );
  }
}
