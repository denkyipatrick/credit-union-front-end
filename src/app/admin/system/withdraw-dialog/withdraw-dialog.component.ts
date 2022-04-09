import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-withdraw-dialog',
  templateUrl: './withdraw-dialog.component.html',
  styleUrls: ['./withdraw-dialog.component.scss']
})
export class WithdrawDialogComponent implements OnInit {
  form: FormGroup;
  isWorking: boolean;
  isNetworkError: boolean;

  constructor(private dialogRef: MatDialogRef<WithdrawDialogComponent>, 
    private snackBar: MatSnackBar,
    private adminService: AdminService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.form = new FormGroup({
        amount: new FormControl(),
        userAccountId: new FormControl(),
        accountNumber: new FormControl()
      });
    }

  ngOnInit(): void {
  }

  withdraw() {
    this.form.patchValue({'userAccountId': this.data.account.id, 
    'accountNumber': this.data.account.accountNumber});

    this.isWorking = true;
    this.isNetworkError = false;

    this.adminService.withdrawAmount(this.form.value)
    .subscribe(transaction => {
      this.isWorking = false;
      this.snackBar.open('Withdrawal Successful', 'OK', {duration: 5000});
      
      this.dialogRef.close(transaction);
    }, error => {
      this.isWorking = false;
      this.isNetworkError = true;

      console.error(error);
      alert('error has occured. please try again later.');
    });
  }
}
