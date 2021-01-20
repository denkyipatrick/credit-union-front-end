import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-banking',
  templateUrl: './business-banking.component.html',
  styleUrls: ['./business-banking.component.scss']
})
export class BusinessBankingComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Offering Options to Help Start, Grow and Maintain your Business | BSV');
  }

}
