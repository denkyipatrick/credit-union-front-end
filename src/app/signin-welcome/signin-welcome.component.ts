import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signin-welcome',
  templateUrl: './signin-welcome.component.html',
  styleUrls: ['./signin-welcome.component.scss']
})
export class SigninWelcomeComponent implements OnInit {
  user: any;

  constructor(private title: Title) {
    this.title.setTitle('Welcome - The Bank of Southside Virginia | Where Community Counts');
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit(): void {
  }

}
