import { AutodealerDivisionModule } from './autodealer-division/autodealer-division.module';
import { PagesSubComponentsModule } from './pages-sub-components/pages-sub-components.module';
import { PersonalBankingComponent } from './personal-banking/personal-banking.component';
import { OkCancelDialogComponent } from './ok-cancel-dialog/ok-cancel-dialog.component';
import { SigninWelcomeComponent } from './signin-welcome/signin-welcome.component';
import { MaterialComponentsModule } from './material-components.module';
import { OkDialogComponent } from './ok-dialog/ok-dialog.component';
import { BusinessBankingModule } from './business-banking/business-banking.module';
import { PersonalBankingModule } from './personal-banking/personal-banking.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CheckingComponent } from './personal/checking/checking.component';
import { OnlineMobileBankingComponent } from './personal/online-mobile-banking/online-mobile-banking.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckingComponent,
    OnlineMobileBankingComponent,
    AboutUsComponent,
    ContactUsComponent,
    SignupComponent,
    SigninComponent,
    ContactUsComponent,
    SigninWelcomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PersonalBankingModule,
    BusinessBankingModule,
    MaterialComponentsModule,
    BrowserAnimationsModule,
    PagesSubComponentsModule,
    AutodealerDivisionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OkDialogComponent, OkCancelDialogComponent]
})
export class AppModule { }
