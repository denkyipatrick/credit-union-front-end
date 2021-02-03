import { OkCancelDialogComponent } from './../../ok-cancel-dialog/ok-cancel-dialog.component';
import { FormGroup, FormControl } from '@angular/forms';
import { OkDialogComponent } from './../../ok-dialog/ok-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UtilityService } from './../../services/utility.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit {
  user: any;
  userAccount: any;
  showForm: boolean;
  form: FormGroup;
  transfers: any[]

  isFetching: boolean;
  isErrorFetching: boolean;

  accountTransfers: any[];
  transferReceiver: any;
  transferReceivers: any[];

  totalTransferedAmount = 0;

  transferErrorMessage: string;
  isTransferring: boolean;
  isErrorTransferring: boolean;

  constructor(private title: Title, private dialogOpener: MatDialog, private utilityService: UtilityService) { 
    this.user = JSON.parse(localStorage.getItem('user'));
    this.userAccount = JSON.parse(localStorage.getItem('selected-account'));
    this.transferReceiver = JSON.parse(localStorage.getItem('transfer-receiver'));

    this.form = new FormGroup({
      amount: new FormControl(),
      senderAccountId: new FormControl(this.userAccount ? this.userAccount['id'] : ''),
      receiverAccountId: new FormControl(this.transferReceiver ? this.transferReceiver['accountNumber'] : '')
    })
  }

  ngOnInit(): void {
    this.title.setTitle("Transfers - Bank of Southside Virginia");
    this.getTransfers();
  }

  toggleShowForm() {
    this.showForm = !this.showForm;
  }

  searchReceiver(searchKey: string) {
    this.utilityService.searchTransferReceivers(searchKey)
    .subscribe(receivers => {
      this.transferReceivers = receivers;
    }, error => {
      console.error('error', error);
    });
  }

  receiverSelected(transferReceiver) {
    this.transferReceiver = transferReceiver;
    this.transferReceivers = [];
    this.form.patchValue({'receiverAccountId': transferReceiver['accountNumber']})
    localStorage.setItem('transfer-receiver', JSON.stringify(transferReceiver));
  }

  outboundTransfer() {
    this.dialogOpener.open(OkDialogComponent, {
      data: {
        title: 'No Outbound Transfers',
        message: `Dear ${this.user['firstName']}, kindly note that we do not allow ` + 
        `transfers to accounts outside of BSV. This is due to online security.`
      }
    })
  }
  
  transferMoney() {
    this.dialogOpener.open(OkCancelDialogComponent)
    .componentInstance.ok.subscribe(() => {
      this.isTransferring = true;
      this.transferErrorMessage = '';
      this.isErrorTransferring = false;
  
      this.utilityService.transferMoney({
        amount: +this.form.value['amount'],
        senderAccountId: this.userAccount['id'],
        receiverAccountId: this.transferReceiver['id']
      })
      .subscribe(transfer => {
        this.accountTransfers.unshift(transfer);

        this.showForm = false;
        this.transferReceiver = null;
        localStorage.removeItem('transfer-receiver');
        this.userAccount['balance'] -= +this.form.value['amount'];
        localStorage.setItem('selected-account', JSON.stringify(this.userAccount));

        this.dialogOpener.open(OkDialogComponent, {
          data: {
            title: 'Transfer Successful',
            message: 'The money transfer action was successful.'
          }
        })
      }, error => {
        this.isTransferring = false;
        this.isErrorTransferring = true;
  
        switch(error.status) {
          case 500:
            break;
        }
      });
    });
  }

  getTransfers() {
    this.isFetching = true;
    this.isErrorFetching = false;

    this.utilityService.getAccountTransfers(this.userAccount['id'])
    .subscribe(transfers => {
      this.isFetching = false;
      this.accountTransfers = transfers;
      this.accountTransfers.forEach(transfer =>  {
        transfer['createdAt'] = new Date(transfer['createdAt']).toDateString();
        this.totalTransferedAmount += +transfer['amount'];
        return transfer;
      });
      
    }, error => {
      this.isFetching = false;
      this.isErrorFetching = true;
      
      switch(error.status) {
        case 404:
          break;
        case 500:
          break;
      }
    });
  }
}
