import { UtilityService } from './../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.scss']
})
export class CreditCardsComponent implements OnInit {

  constructor(private title: Title, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.title.setTitle(` | ${this.utilityService.bankName}`);
  }
}
