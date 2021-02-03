import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-pane-account-item',
  templateUrl: './left-pane-account-item.component.html',
  styleUrls: ['./left-pane-account-item.component.scss']
})
export class LeftPaneAccountItemComponent implements OnInit {
  @Input() account: any;
  @Output() selected: EventEmitter<LeftPaneAccountItemComponent>

  constructor() { 
    this.selected = new EventEmitter()
  }

  ngOnInit(): void {
  }

  accountSelected() {
    this.selected.emit(this);
  }

}
