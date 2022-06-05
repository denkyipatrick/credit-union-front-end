import { CurrencyResolver } from './currency.resolver';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransfersComponent } from './transfers/transfers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BankingComponent } from './banking.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankingResolver } from './banking.resolver';

const routes: Routes = [
  {
    path: '',
    component: BankingComponent,
    resolve: { bankAccounts: BankingResolver, currencies: CurrencyResolver },
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'transfers', component: TransfersComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'accounts/:id', component: AccountDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankingRoutingModule {}
