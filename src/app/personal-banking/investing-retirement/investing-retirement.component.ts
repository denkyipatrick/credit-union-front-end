import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investing-retirement',
  templateUrl: './investing-retirement.component.html',
  styleUrls: ['./investing-retirement.component.scss']
})
export class InvestingRetirementComponent implements OnInit {
  baseUrl: String

  constructor() {
    this.baseUrl = "/persoanl/investing-retirement"
  }

  ngOnInit(): void {
  }

}
