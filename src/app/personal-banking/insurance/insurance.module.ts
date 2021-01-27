import { PagesSubComponentsModule } from './../../pages-sub-components/pages-sub-components.module';
import { InsuranceComponent } from './insurance.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAndCondoComponent } from './home-and-condo/home-and-condo.component';
import { RentersComponent } from './renters/renters.component';
import { FloodComponent } from './flood/flood.component';
import { LifeComponent } from './life/life.component';
import { LongTermCaseComponent } from './long-term-case/long-term-case.component';
import { LongDisabilityComponent } from './long-disability/long-disability.component';



@NgModule({
  declarations: [
    InsuranceComponent,
    HomeAndCondoComponent,
    RentersComponent,
    FloodComponent,
    LifeComponent,
    LongTermCaseComponent,
    LongDisabilityComponent
  ],
  imports: [
    CommonModule,
    PagesSubComponentsModule
  ]
})
export class InsuranceModule { }
