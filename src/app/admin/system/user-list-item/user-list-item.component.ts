import { AdminService } from './../../../services/admin.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent implements OnInit {
  @Input() user: any;
  isDeleting: boolean = false;
  @Output() deleted: EventEmitter<string> = new EventEmitter();

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {}

  deleteUser() {
    if (confirm('Deleting a user cannot be undone. Are you sure?')) {
      this.isDeleting = true;

      this.adminService.deleteUser(this.user['id']).subscribe(
        () => {
          this.deleted.emit(this.user['id']);
          alert('User delete successfully.');
        },
        (error) => {
          this.isDeleting = false;
          alert('Unable to delete user. Try again later.');
        }
      );
    }
  }
}
