import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-mobile-banking',
  templateUrl: './online-mobile-banking.component.html',
  styleUrls: ['./online-mobile-banking.component.scss']
})
export class OnlineMobileBankingComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("Online & Mobile Banking | The Bank of Southside Virginia");
  }

}
