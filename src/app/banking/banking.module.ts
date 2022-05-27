import { PagesSubComponentsModule } from './../pages-sub-components/pages-sub-components.module';
import { WaitingLoaderModule } from './../waiting-loader/waiting-loader.module';
import { MaterialComponentsModule } from './../material-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankingRoutingModule } from './banking-routing.module';
import { BankingComponent } from './banking.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransfersComponent } from './transfers/transfers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftPaneAccountItemComponent } from './left-pane-account-item/left-pane-account-item.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { DepositsComponent } from './deposits/deposits.component';
import { WithdrawalsComponent } from './withdrawals/withdrawals.component';
import { TransactionsTableComponent } from './transactions-table/transactions-table.component';

@NgModule({
  declarations: [
    BankingComponent,
    TransactionsComponent,
    TransfersComponent,
    DashboardComponent,
    LeftPaneAccountItemComponent,
    AccountDetailComponent,
    DepositsComponent,
    WithdrawalsComponent,
    TransactionsTableComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BankingRoutingModule,
    WaitingLoaderModule,
    PagesSubComponentsModule,
    MaterialComponentsModule,
  ],
})
export class BankingModule {}
