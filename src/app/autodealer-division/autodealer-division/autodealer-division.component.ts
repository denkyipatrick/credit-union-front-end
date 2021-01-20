import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autodealer-division',
  templateUrl: './autodealer-division.component.html',
  styleUrls: ['./autodealer-division.component.scss']
})
export class AutodealerDivisionComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("Auto Loans & Car Payments | The Bank of Southside Virginia");
  }

}
