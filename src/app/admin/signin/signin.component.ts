import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  signin()  {
    if (this.form.invalid) { return; }

    const username: string = this.form.value['username'];
    const password: string = this.form.value['password'];

    if (username.toLowerCase() !== 'doasted' || password.toLowerCase() !== 'bronx') {
      alert('Username or Password is wrong');
      return;
    }

    localStorage.setItem('admin-logged-in', JSON.stringify(true));
    window.location.href = "/admin/s/users";
  }

}
