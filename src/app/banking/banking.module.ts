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


@NgModule({
  declarations: [
    BankingComponent, 
    TransactionsComponent, 
    TransfersComponent, 
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BankingRoutingModule,
    WaitingLoaderModule,
    MaterialComponentsModule
  ]
})
export class BankingModule { }
