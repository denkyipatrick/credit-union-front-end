import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-professional-liability',
  templateUrl: './professional-liability.component.html',
  styleUrls: ['./professional-liability.component.scss']
})
export class ProfessionalLiabilityComponent implements OnInit {

  constructor(private titleService: Title, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.titleService.setTitle(
      `Business Professional Liability Insurance | ${this.utilityService.bankName}`
    );
  }

}
