import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates-of-deposit',
  templateUrl: './certificates-of-deposit.component.html',
  styleUrls: ['./certificates-of-deposit.component.scss']
})
export class CertificatesOfDepositComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("Certificates of Deosit. Advantages, Disadvantages & Features | BSV");
  }

}
