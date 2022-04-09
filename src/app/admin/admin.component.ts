import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private title: Title, private utilityService: UtilityService) {}

  ngOnInit(): void {
    this.title.setTitle(
      `Admin Sign-In | ${this.utilityService.applicationName}`
    );
  }
}
