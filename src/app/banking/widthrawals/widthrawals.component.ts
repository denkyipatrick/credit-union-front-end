import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widthrawals',
  templateUrl: './widthrawals.component.html',
  styleUrls: ['./widthrawals.component.scss']
})
export class WidthrawalsComponent implements OnInit {
  @Input() withdrawals: any[]
  @Input() withdrawnAmount: number;

  constructor() { }

  ngOnInit(): void {
  }

}
