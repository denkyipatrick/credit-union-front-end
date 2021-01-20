import { UserDetailComponent } from './user-detail/user-detail.component';
import { SystemComponent } from './system.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountTypesComponent } from './account-types/account-types.component';

const routes: Routes = [
  { path: '', component: SystemComponent, children: [
    { path: 'users', component: UsersComponent },
    { path: 'users/:id', component: UserDetailComponent },
    { path: 'accounts', component: AccountsComponent },
    { path: 'account-types', component: AccountTypesComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
