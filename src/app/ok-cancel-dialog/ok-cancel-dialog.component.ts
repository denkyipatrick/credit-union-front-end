import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ok-cancel-dialog',
  templateUrl: './ok-cancel-dialog.component.html',
  styleUrls: ['./ok-cancel-dialog.component.scss']
})
export class OkCancelDialogComponent implements OnInit {
  ok: EventEmitter<null>;
  cancel: EventEmitter<null>;

  constructor(private dialogRef: MatDialogRef<OkCancelDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.ok = new EventEmitter();
      this.cancel = new EventEmitter();
    }

  ngOnInit(): void {
  }

  close() {
    this.cancel.emit();
    this.dialogRef.close();
  }

  continue() {
    this.ok.emit();
    this.dialogRef.close();
  }

}
