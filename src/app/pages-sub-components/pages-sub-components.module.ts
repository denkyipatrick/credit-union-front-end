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
import { ImageAndContentRowComponent } from './image-and-content-row/image-and-content-row.component';
import { ImageAndDarkRectContentRowComponent } from './image-and-dark-rect-content-row/image-and-dark-rect-content-row.component';
import { CallUsRowComponent } from './call-us-row/call-us-row.component';
import { FindAdvisorRowComponent } from './find-advisor-row/find-advisor-row.component';
import { TitleShadowCardComponent } from './title-shadow-card/title-shadow-card.component';
import { GrayHeaderItemComponent } from './gray-header-item/gray-header-item.component';
import { ImageAndWhiteRectRowComponent } from './image-and-white-rect-row/image-and-white-rect-row.component';
import { TeamMemberCardComponent } from './team-member-card/team-member-card.component';
import { WorkingHoursComponent } from './working-hours/working-hours.component';

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
    MoreInfoCardComponent,
    ImageAndContentRowComponent,
    ImageAndDarkRectContentRowComponent,
    CallUsRowComponent,
    FindAdvisorRowComponent,
    TitleShadowCardComponent,
    GrayHeaderItemComponent,
    ImageAndWhiteRectRowComponent,
    TeamMemberCardComponent,
    WorkingHoursComponent
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
    MoreInfoCardComponent,
    CallUsRowComponent,
    TitleShadowCardComponent,
    FindAdvisorRowComponent,
    GrayHeaderItemComponent,
    ImageAndWhiteRectRowComponent,
    ImageAndContentRowComponent,
    TeamMemberCardComponent,
    ImageAndDarkRectContentRowComponent
  ]
})
export class PagesSubComponentsModule { }
