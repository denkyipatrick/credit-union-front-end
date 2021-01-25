import { InvestYourWayComponent } from './personal-banking/investing-retirement/invest-your-way/invest-your-way.component';
import { InvestmentManagementComponent } from './personal-banking/investing-retirement/investment-management/investment-management.component';
import { RetirementPlanningComponent } from './personal-banking/investing-retirement/retirement-planning/retirement-planning.component';
import { PersonalLoansComponent } from './personal-banking/loans/personal-loans/personal-loans.component';
import { ConstructionLoansComponent } from './personal-banking/loans/construction-loans/construction-loans.component';
import { HomeLoansComponent } from './personal-banking/loans/home-loans/home-loans.component';
import { HealthSavingsComponent } from './personal-banking/health-savings/health-savings.component';
import { EducationAndGuidanceComponent } from './business-banking/education-and-guidance/education-and-guidance.component';
import { BusinessInsuranceComponent } from './business-banking/business-insurance/business-insurance.component';
import { EmployeeBenefitsComponent } from './business-banking/employee-benefits/employee-benefits.component';
import { BusinessFinancingComponent } from './business-banking/business-financing/business-financing.component';
import { CashManagementComponent } from './business-banking/cash-management/cash-management.component';
import { PersonalInsuranceComponent } from './personal-banking/personal-insurance/personal-insurance.component';
import { OnlineMobileBankingComponent } from './personal-banking/online-mobile-banking/online-mobile-banking.component';
import { SigninComponent } from './signin/signin.component';
import { SigninWelcomeComponent } from './signin-welcome/signin-welcome.component';
import { SignupComponent } from './signup/signup.component';

import { BusinessBankingComponent } from './business-banking/business-banking.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonalBankingComponent } from './personal-banking/personal-banking.component';
import { CheckingComponent } from './personal-banking/checking/checking.component';
import { CertificatesOfDepositComponent } from './personal-banking/certificates-of-deposit/certificates-of-deposit.component';
import { LoansComponent } from './personal-banking/loans/loans.component';
import { CreditCardsComponent } from './personal-banking/credit-cards/credit-cards.component';
import { SavingsComponent } from './personal-banking/savings/savings.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InvestingRetirementComponent } from './personal-banking/investing-retirement/investing-retirement.component';
import { FinancialLifeComponent } from './personal-banking/financial-life/financial-life.component';
import { BankingComponent } from './personal-banking/banking/banking.component';
import { HomeAndEquityLoansComponent } from './personal-banking/loans/home-and-equity-loans/home-and-equity-loans.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'welcome', component: SigninWelcomeComponent },
  { path: 'create-account', component: SignupComponent },

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'banking', loadChildren: () => import('./banking/banking.module').then(m => m.BankingModule) },

  { path: 'personal', redirectTo: '/personal/banking', pathMatch: 'full'},
  { path: 'personal/banking', component: BankingComponent },
  { path: 'personal/banking/checking', component: CheckingComponent },
  { path: 'personal/banking/savings-and-money-market', component: SavingsComponent },
  { path: 'personal/banking/health-savings-accounts', component: HealthSavingsComponent },
  { path: 'personal/banking/certificate-of-deposit', component: CertificatesOfDepositComponent },
  { path: 'personal/banking/cards', component: CreditCardsComponent },
  { path: 'personal/home-personal-loans', component: LoansComponent },
  { path: 'personal/home-personal-loans/home-loans', component: HomeLoansComponent },
  { path: 'personal/home-personal-loans/personal-loans-lines-of-credit', component: PersonalLoansComponent },
  { path: 'personal/home-personal-loans/construction-lot-loans', component: ConstructionLoansComponent },
  { path: 'personal/home-personal-loans/home-equity-loans-lines-of-credit', component: HomeAndEquityLoansComponent },
  { path: 'personal/personal-insurance', component: PersonalInsuranceComponent },
  { path: 'personal/investment-retirement', component: InvestingRetirementComponent },
  { path: 'personal/investment-retirement/invest-your-way', component: InvestYourWayComponent },
  { path: 'personal/investment-retirement/investment-management', component: InvestmentManagementComponent },
  { path: 'personal/investment-retirement/retirement-financial-planning', component: RetirementPlanningComponent },
  { path: 'personal/your-financial-life', component: FinancialLifeComponent },
  { path: 'personal/certificates-of-deposit-cds', component: CertificatesOfDepositComponent },
  
  { path: 'business', component: BusinessBankingComponent },
  { path: 'business/cash-management', component: CashManagementComponent },
  { path: 'business/business-financing', component: BusinessFinancingComponent },
  { path: 'business/employee-benefits', component: EmployeeBenefitsComponent },
  { path: 'business/business-insurance', component: BusinessInsuranceComponent },
  { path: 'business/education-guidance', component: EducationAndGuidanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
