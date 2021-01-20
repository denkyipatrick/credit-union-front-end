import { MaterialComponentsModule } from './../material-components.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboveFoldPictureComponent } from './above-fold-picture/above-fold-picture.component';
import { IconHeadingDescriptionColumnComponent } from './icon-heading-description-column/icon-heading-description-column.component';
import { ServiceOverviewListItemComponent } from './service-overview-list-item/service-overview-list-item.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RightSideBarComponent,
    AboveFoldPictureComponent,
    IconHeadingDescriptionColumnComponent,
    ServiceOverviewListItemComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RightSideBarComponent,
    AboveFoldPictureComponent,
    ServiceOverviewListItemComponent
  ]
})
export class PagesSubComponentsModule { }
