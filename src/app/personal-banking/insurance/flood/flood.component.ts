import { Title } from '@angular/platform-browser';
import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flood',
  templateUrl: './flood.component.html',
  styleUrls: ['./flood.component.scss']
})
export class FloodComponent implements OnInit {
  shortBankName: String;

  constructor(private titleService: Title, private utilityService: UtilityService) {
    this.shortBankName = utilityService.shortBankName;
  }

  ngOnInit(): void {
  }

}
