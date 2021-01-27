import { UtilityService } from './../../../services/utility.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-leasing',
  templateUrl: './equipment-leasing.component.html',
  styleUrls: ['./equipment-leasing.component.scss']
})
export class EquipmentLeasingComponent implements OnInit {
  
  constructor(private titleService: Title, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.titleService.setTitle(`Business Equipment Leasing | ` + 
    `Finance Business Equipment | ${this.utilityService.bankName}`)
  }

}
