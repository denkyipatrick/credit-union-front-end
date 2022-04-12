import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any[];
  isFetching: boolean;
  errorMessage: string;
  isErrorFetching: boolean;

  constructor(
    private title: Title,
    private adminService: AdminService,
    private utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    this.title.setTitle(`Users | ${this.utilityService.applicationName}`);
    this.getUsers();
  }

  userDeleted(userId: string) {
    this.users = this.users.filter((user) => user.id !== userId);
  }

  getUsers() {
    this.isFetching = true;
    this.errorMessage = '';
    this.isErrorFetching = false;

    this.adminService.getUsers().subscribe(
      (users) => {
        this.users = users;
        this.isFetching = false;
      },
      (error) => {
        this.isFetching = false;
        this.isErrorFetching = true;

        switch (error.status) {
          case 400:
            break;
          case 500:
            break;
        }
      }
    );
  }
}
