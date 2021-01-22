import { UtilityService } from './../../services/utility.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates-of-deposit',
  templateUrl: './certificates-of-deposit.component.html',
  styleUrls: ['./certificates-of-deposit.component.scss']
})
export class CertificatesOfDepositComponent implements OnInit {

  constructor(private title: Title, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.title.setTitle(`Certificate of Deposits (CDs) | CD Laddering | ${this.utilityService.bankName}`);
  }

}
