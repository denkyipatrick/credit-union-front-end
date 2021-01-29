import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-long-term-case',
  templateUrl: './long-term-case.component.html',
  styleUrls: ['./long-term-case.component.scss']
})
export class LongTermCaseComponent implements OnInit {

  constructor(private titleService: Title, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.titleService.setTitle(`Long-Term Care Insurance | ` + 
    `Extended Care Insurance | ${this.utilityService.bankName}`);
  }

}
