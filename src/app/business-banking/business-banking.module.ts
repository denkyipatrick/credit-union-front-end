import { BusinessInsuranceModule } from './business-insurance/business-insurance.module';
import { EmployeeBenefitsModule } from './employee-benefits/employee-benefits.module';
import { BusinessFinancingModule } from './business-financing/business-financing.module';
import { CashManagementModule } from './cash-management/cash-management.module';
import { PagesSubComponentsModule } from './../pages-sub-components/pages-sub-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessBankingComponent } from './business-banking.component';
import { EducationAndGuidanceComponent } from './education-and-guidance/education-and-guidance.component';

@NgModule({
  declarations: [
    BusinessBankingComponent,
    EducationAndGuidanceComponent
  ],
  imports: [
    CommonModule,
    CashManagementModule,
    EmployeeBenefitsModule,
    BusinessFinancingModule,
    BusinessInsuranceModule,
    PagesSubComponentsModule
  ]
})
export class BusinessBankingModule { }
