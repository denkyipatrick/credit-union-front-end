import { WaitingLoaderModule } from './../../waiting-loader/waiting-loader.module';
import { MaterialComponentsModule } from './../../material-components.module';
import { AccountTypesComponent } from './account-types/account-types.component';
import { AccountsComponent } from './accounts/accounts.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DepositDialogComponent } from './deposit-dialog/deposit-dialog.component';
import { CurrenciesComponent } from './currencies/currencies.component';

@NgModule({
  declarations: [
    SystemComponent,
    UsersComponent,
    AccountsComponent,
    AccountTypesComponent,
    UserListItemComponent,
    UserDetailComponent,
    DepositDialogComponent,
    CurrenciesComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    ReactiveFormsModule,
    MaterialComponentsModule,
    WaitingLoaderModule
  ],
  entryComponents: [
    DepositDialogComponent
  ]
})
export class SystemModule { }
