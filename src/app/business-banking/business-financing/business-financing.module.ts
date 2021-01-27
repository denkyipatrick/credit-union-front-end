import { PagesSubComponentsModule } from './../../pages-sub-components/pages-sub-components.module';
import { BusinessFinancingComponent } from './business-financing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessLoansComponent } from './business-loans/business-loans.component';
import { CommercialRealEstateComponent } from './commercial-real-estate/commercial-real-estate.component';
import { EquipmentLeasingComponent } from './equipment-leasing/equipment-leasing.component';



@NgModule({
  declarations: [
    BusinessFinancingComponent,
    BusinessLoansComponent,
    CommercialRealEstateComponent,
    EquipmentLeasingComponent
  ],
  imports: [
    CommonModule,
    PagesSubComponentsModule
  ]
})
export class BusinessFinancingModule { }
