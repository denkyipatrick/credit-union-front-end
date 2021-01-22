import { PagesSubComponentsModule } from './../../pages-sub-components/pages-sub-components.module';
import { LoansComponent } from './loans.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLoansComponent } from './home-loans/home-loans.component';
import { HomeAndEquityLoansComponent } from './home-and-equity-loans/home-and-equity-loans.component';
import { ConstructionLoansComponent } from './construction-loans/construction-loans.component';
import { PersonalLoansComponent } from './personal-loans/personal-loans.component';

@NgModule({
  declarations: [
    LoansComponent,
    HomeLoansComponent,
    HomeAndEquityLoansComponent,
    ConstructionLoansComponent,
    PersonalLoansComponent
  ],
  imports: [
    CommonModule,
    PagesSubComponentsModule
  ]
})
export class LoansModule { }
