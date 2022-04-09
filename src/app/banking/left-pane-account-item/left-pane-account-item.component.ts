import { UtilityService } from 'src/app/services/utility.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-pane-account-item',
  templateUrl: './left-pane-account-item.component.html',
  styleUrls: ['./left-pane-account-item.component.scss']
})
export class LeftPaneAccountItemComponent implements OnInit {
  currencyId: string;
  @Input() account: any;
  @Output() selected: EventEmitter<LeftPaneAccountItemComponent>

  constructor(public utilityService: UtilityService) { 
    this.selected = new EventEmitter();
    this.currencyId = this.utilityService?.selectedCurrency?.id;
  }

  ngOnInit(): void {
  }

  accountSelected() {
    this.selected.emit(this);
  }

}
