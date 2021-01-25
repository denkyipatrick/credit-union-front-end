import { MaterialComponentsModule } from './../material-components.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboveFoldPictureComponent } from './above-fold-picture/above-fold-picture.component';
import { IconHeadingDescriptionColumnComponent } from './icon-heading-description-column/icon-heading-description-column.component';
import { ServiceOverviewListItemComponent } from './service-overview-list-item/service-overview-list-item.component';
import { IconAndContentShadowCardComponent } from './icon-and-content-shadow-card/icon-and-content-shadow-card.component';
import { IconAndContentItemComponent } from './icon-and-content-item/icon-and-content-item.component';
import { MoreInfoCardComponent } from './more-info-card/more-info-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RightSideBarComponent,
    AboveFoldPictureComponent,
    IconHeadingDescriptionColumnComponent,
    ServiceOverviewListItemComponent,
    IconAndContentShadowCardComponent,
    IconAndContentItemComponent,
    IconAndContentItemComponent,
    MoreInfoCardComponent
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
    ServiceOverviewListItemComponent,
    IconAndContentItemComponent,
    IconAndContentShadowCardComponent,
    MoreInfoCardComponent
  ]
})
export class PagesSubComponentsModule { }
