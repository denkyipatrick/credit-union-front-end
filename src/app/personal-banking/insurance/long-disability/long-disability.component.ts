import { UtilityService } from './../../../services/utility.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-long-disability',
  templateUrl: './long-disability.component.html',
  styleUrls: ['./long-disability.component.scss']
})
export class LongDisabilityComponent implements OnInit {

  constructor(private titleService: Title, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.titleService.setTitle(`Disability Insurance | ` + 
    `Long vs Short Term Disability | ${this.utilityService.bankName}`);
  }

}
