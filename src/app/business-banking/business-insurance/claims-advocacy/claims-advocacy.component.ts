import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-claims-advocacy',
  templateUrl: './claims-advocacy.component.html',
  styleUrls: ['./claims-advocacy.component.scss']
})
export class ClaimsAdvocacyComponent implements OnInit {

  constructor(private titleService: Title, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.titleService.setTitle(
      `Business Claims Advocacy | Claims Insurance | ` + 
      `Claims Solutions | ${this.utilityService.bankName}`
    );
  }

}
