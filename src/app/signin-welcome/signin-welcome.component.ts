import { UtilityService } from 'src/app/services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signin-welcome',
  templateUrl: './signin-welcome.component.html',
  styleUrls: ['./signin-welcome.component.scss']
})
export class SigninWelcomeComponent implements OnInit {
  user: any;
  bankName: String;

  constructor(private title: Title, private utilityService: UtilityService) {
    this.bankName = utilityService.bankName;
    this.title.setTitle(`Welcome - ${utilityService.bankName}`);
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit(): void {
  }

}
