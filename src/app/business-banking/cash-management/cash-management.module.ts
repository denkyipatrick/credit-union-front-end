import { PagesSubComponentsModule } from './../../pages-sub-components/pages-sub-components.module';
import { CashManagementComponent } from './cash-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessAccountsComponent } from './business-accounts/business-accounts.component';
import { PayablesManagementComponent } from './payables-management/payables-management.component';
import { InformationManagementComponent } from './information-management/information-management.component';



@NgModule({
  declarations: [
    CashManagementComponent,
    BusinessAccountsComponent,
    PayablesManagementComponent,
    InformationManagementComponent
  ],
  imports: [
    CommonModule,
    PagesSubComponentsModule
  ]
})
export class CashManagementModule { }
