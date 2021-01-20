import { PagesSubComponentsModule } from './../pages-sub-components/pages-sub-components.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutodealerDivisionComponent } from './autodealer-division/autodealer-division.component';



@NgModule({
  declarations: [AutodealerDivisionComponent],
  imports: [
    CommonModule,
    PagesSubComponentsModule
  ]
})
export class AutodealerDivisionModule { }
