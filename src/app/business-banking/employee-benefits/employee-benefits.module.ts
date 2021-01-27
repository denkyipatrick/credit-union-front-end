import { PagesSubComponentsModule } from './../../pages-sub-components/pages-sub-components.module';
import { EmployeeBenefitsComponent } from './employee-benefits.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumanResourceConsultingComponent } from './human-resource-consulting/human-resource-consulting.component';
import { VoluntaryWorksiteBenefitsComponent } from './voluntary-worksite-benefits/voluntary-worksite-benefits.component';
import { RetirementPlansComponent } from './retirement-plans/retirement-plans.component';
import { StrategicEmployeeBenefitsComponent } from './strategic-employee-benefits/strategic-employee-benefits.component';



@NgModule({
  declarations: [
    EmployeeBenefitsComponent,
    HumanResourceConsultingComponent,
    VoluntaryWorksiteBenefitsComponent,
    RetirementPlansComponent,
    StrategicEmployeeBenefitsComponent
  ],
  imports: [
    CommonModule,
    PagesSubComponentsModule
  ]
})
export class EmployeeBenefitsModule { }
