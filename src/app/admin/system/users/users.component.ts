import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[];
  isFetching: boolean;
  errorMessage: string;
  isErrorFetching: boolean;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.isFetching = true;
    this.errorMessage = '';
    this.isErrorFetching = false;

    this.adminService.getUsers()
    .subscribe(users => {
      this.users = users;
      this.isFetching = false;

      console.log(users);
    }, error => {
      this.isFetching = false;
      this.isErrorFetching = true;

      switch(error.status) {
        case 400:
          break;
        case 500:
          break;
      }
    });
  }

}
