import { UtilityService } from 'src/app/services/utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-us-row',
  templateUrl: './call-us-row.component.html',
  styleUrls: ['./call-us-row.component.scss']
})
export class CallUsRowComponent implements OnInit {
  bankPhoneNumber: String;

  constructor(private utilityService: UtilityService) {
    this.bankPhoneNumber = this.utilityService.bankPhoneNumber;
  }

  ngOnInit(): void {
  }

}
