import { PagesSubComponentsModule } from './../pages-sub-components/pages-sub-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessBankingComponent } from './business-banking.component';
import { CashManagementComponent } from './cash-management/cash-management.component';
import { BusinessFinancingComponent } from './business-financing/business-financing.component';
import { EmployeeBenefitsComponent } from './employee-benefits/employee-benefits.component';
import { BusinessInsuranceComponent } from './business-insurance/business-insurance.component';
import { EducationAndGuidanceComponent } from './education-and-guidance/education-and-guidance.component';

@NgModule({
  declarations: [
    BusinessBankingComponent, 
    CashManagementComponent, 
    BusinessFinancingComponent, 
    EmployeeBenefitsComponent, 
    BusinessInsuranceComponent, 
    EducationAndGuidanceComponent
  ],
  imports: [
    CommonModule,
    PagesSubComponentsModule
  ]
})
export class BusinessBankingModule { }
