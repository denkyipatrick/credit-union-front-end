import { UtilityService } from './../../../services/utility.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-human-resource-consulting',
  templateUrl: './human-resource-consulting.component.html',
  styleUrls: ['./human-resource-consulting.component.scss']
})
export class HumanResourceConsultingComponent implements OnInit {

  constructor(private titleService: Title, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.titleService.setTitle(
      `Business Retirement Plans | ` + 
      `Employer sponsored retirement plans | ${this.utilityService.bankName}`
    );
  }

}
