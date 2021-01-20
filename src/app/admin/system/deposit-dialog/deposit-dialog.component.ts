import { AdminService } from './../../../services/admin.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-deposit-dialog',
  templateUrl: './deposit-dialog.component.html',
  styleUrls: ['./deposit-dialog.component.scss']
})
export class DepositDialogComponent implements OnInit {
  form: FormGroup;
  isWorking: boolean;
  isNetworkError: boolean;

  constructor(private dialogRef: MatDialogRef<DepositDialogComponent>, 
    private snackBar: MatSnackBar,
    private adminService: AdminService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.form = new FormGroup({
        amount: new FormControl(),
        userAccountId: new FormControl(),
        accountNumber: new FormControl()
      })
    }

  ngOnInit(): void {
  }

  deposit() {
    this.form.patchValue({'userAccountId': this.data.account.id, 
    'accountNumber': this.data.account.accountNumber});

    this.isWorking = true;
    this.isNetworkError = false;

    this.adminService.depositAmount(this.form.value)
    .subscribe(transaction => {
      this.isWorking = false;
      this.snackBar.open('Deposit Successful', 'OK', {duration: 5000});
      
      this.dialogRef.close(transaction);
    }, error => {
      this.isWorking = false;
      this.isNetworkError = true;

      console.error(error);
      alert('error has occured. please try again later.');
    });
  }

}
