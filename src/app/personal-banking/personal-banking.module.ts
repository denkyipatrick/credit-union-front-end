import { InsuranceModule } from './insurance/insurance.module';
import { InvestingRetirementModule } from './investing-retirement/investing-retirement.module';
import { LoansModule } from './loans/loans.module';
import { PagesSubComponentsModule } from './../pages-sub-components/pages-sub-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalBankingComponent } from './personal-banking.component';
import { CheckingComponent } from './checking/checking.component';
import { OnlineMobileBankingComponent } from './online-mobile-banking/online-mobile-banking.component';
import { SavingsComponent } from './savings/savings.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { CertificatesOfDepositComponent } from './certificates-of-deposit/certificates-of-deposit.component';
import { InvestingRetirementComponent } from './investing-retirement/investing-retirement.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { PersonalInsuranceComponent } from './personal-insurance/personal-insurance.component';
import { FinancialLifeComponent } from './financial-life/financial-life.component';
import { BankingComponent } from './banking/banking.component';
import { HealthSavingsComponent } from './health-savings/health-savings.component';

@NgModule({
  declarations: [
    PersonalBankingComponent,
    CheckingComponent,
    OnlineMobileBankingComponent,
    SavingsComponent,
    CreditCardsComponent,
    CertificatesOfDepositComponent,
    PersonalInsuranceComponent,
    FinancialLifeComponent,
    BankingComponent,
    HealthSavingsComponent
  ],
  imports: [
    CommonModule,
    LoansModule,
    InsuranceModule,
    InvestingRetirementModule,
    PagesSubComponentsModule
  ]
})
export class PersonalBankingModule { }
