
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: 'signin', component: SigninComponent },
    { path: 's', loadChildren: () => import('./system/system.module').then(m => m.SystemModule) },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
