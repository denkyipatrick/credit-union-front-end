import { PagesSubComponentsModule } from './../../pages-sub-components/pages-sub-components.module';
import { BusinessInsuranceComponent } from './business-insurance.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCasualtyInsuranceComponent } from './property-casualty-insurance/property-casualty-insurance.component';
import { RiskManagementComponent } from './risk-management/risk-management.component';
import { ClaimsAdvocacyComponent } from './claims-advocacy/claims-advocacy.component';
import { ProfessionalLiabilityComponent } from './professional-liability/professional-liability.component';
import { MergersAndAcquistionComponent } from './mergers-and-acquistion/mergers-and-acquistion.component';



@NgModule({
  declarations: [
    BusinessInsuranceComponent,
    PropertyCasualtyInsuranceComponent,
    RiskManagementComponent,
    ClaimsAdvocacyComponent,
    ProfessionalLiabilityComponent,
    MergersAndAcquistionComponent
  ],
  imports: [
    CommonModule,
    PagesSubComponentsModule
  ]
})
export class BusinessInsuranceModule { }
