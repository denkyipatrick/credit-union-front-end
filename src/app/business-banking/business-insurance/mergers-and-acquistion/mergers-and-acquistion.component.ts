import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mergers-and-acquistion',
  templateUrl: './mergers-and-acquistion.component.html',
  styleUrls: ['./mergers-and-acquistion.component.scss']
})
export class MergersAndAcquistionComponent implements OnInit {

  constructor(private titleService: Title, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.titleService.setTitle(
      `Mergers & Acquisition for Business | ${this.utilityService.bankName}`
    );
  }


}
