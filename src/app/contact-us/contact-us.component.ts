import { OkDialogComponent } from './../ok-dialog/ok-dialog.component';
import { OkCancelDialogComponent } from './../ok-cancel-dialog/ok-cancel-dialog.component';
import { UtilityService } from './../services/utility.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;
  isSending: boolean;
  isErrorSending: boolean;
  bankPhoneNumber: String;
  backgroundImagePropertyValue: string;

  constructor(private dialogOpener: MatDialog, private utilityService: UtilityService) {
    this.bankPhoneNumber = utilityService.bankPhoneNumber;
    this.form = new FormGroup({
      fName: new FormControl(),
      lName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      questionsOrComments: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  send() {
    if (this.form.invalid) { return; }
    
    this.dialogOpener.open(OkCancelDialogComponent, {
      data: {
        title: `Contact ${this.utilityService.bankName}?`,
        message: `Are you sure you want to send this information to ${this.utilityService.bankName}?`
      }
    })
    .componentInstance.ok.subscribe(() => {
      this.isSending = true;
      this.isErrorSending = false;

      this.utilityService.sendContactData(this.form.value)
      .subscribe(message => {
        this.isSending = false;

        this.dialogOpener.open(OkDialogComponent, {
          data: {
            title: "Successful, Thank You!",
            message: "The operation was successful, you will hear from us very soon."
          }
        })
      }, error => {
        this.isSending = false;
        this.isErrorSending = true;

        this.dialogOpener.open(OkDialogComponent, {
          data: {
            title: "Unable to Contact Server",
            message: "Sorry, the system was unable to contact the BSV Online Banking Servers. Try again later."
          }
        });
      });
    })


  }

}
