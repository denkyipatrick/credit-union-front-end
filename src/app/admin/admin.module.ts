import { WaitingLoaderModule } from './../waiting-loader/waiting-loader.module';
import { MaterialComponentsModule } from './../material-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent, 
    SigninComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    WaitingLoaderModule,
    ReactiveFormsModule,
    MaterialComponentsModule
  ]
})
export class AdminModule { }
