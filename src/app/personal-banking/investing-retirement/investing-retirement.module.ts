import { PagesSubComponentsModule } from './../../pages-sub-components/pages-sub-components.module';
import { InvestingRetirementComponent } from './investing-retirement.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetirementPlanningComponent } from './retirement-planning/retirement-planning.component';
import { InvestmentManagementComponent } from './investment-management/investment-management.component';
import { InvestYourWayComponent } from './invest-your-way/invest-your-way.component';

@NgModule({
  declarations: [
    InvestingRetirementComponent,
    RetirementPlanningComponent,
    InvestmentManagementComponent,
    InvestYourWayComponent
  ],
  imports: [
    CommonModule,
    PagesSubComponentsModule
  ]
})
export class InvestingRetirementModule { }
