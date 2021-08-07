import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { NoLoginGuard } from './guards/no-login.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'myProfile',
    canActivate: [LoginGuard],
    loadChildren: () => import('./screen/my-profile/my-profile.module').then(m => m.MyProfileModule)
  },
  {
    path: 'home',
    canActivate: [LoginGuard],
    loadChildren: () => import('./screen/home/home.module').then(m => m.HomeModule)
  },
  { path: 'lodgings',canActivate: [LoginGuard], loadChildren: () => import('./screen/lodgings/lodgings.module').then(m => m.LodgingsModule) },
  { path: 'recoverPassword', loadChildren: () => import('./screen/recover-password/recover-password.module').then(m => m.RecoverPasswordModule) },
  { path: 'myAccommodation', canActivate: [LoginGuard], loadChildren: () => import('./screen/my-accommodation/my-accommodation.module').then(m => m.MyAccommodationModule) },
  { path: 'house', canActivate: [LoginGuard], loadChildren: () => import('./screen/house/house.module').then(m => m.HouseModule) },
  { path: 'paymentHistory',canActivate: [LoginGuard], loadChildren: () => import('./screen/payment-history/payment-history.module').then(m => m.PaymentHistoryModule) },
  { path: 'viewPayments/:id',canActivate: [LoginGuard], loadChildren: () => import('./screen/view-payments/view-payments.module').then(m => m.ViewPaymentsModule) },
  { path: 'rentPayment',canActivate: [LoginGuard], loadChildren: () => import('./screen/rent-payment/rent-payment.module').then(m => m.RentPaymentModule) },
  { path: 'pay', canActivate: [LoginGuard],loadChildren: () => import('./screen/pay/pay.module').then(m => m.PayModule) },
  { path: 'login',canActivate:[NoLoginGuard], loadChildren: () => import('./screen/login/login.module').then(m => m.LoginModule) },
  { path: 'validate', loadChildren: () => import('./screen/validate/validate.module').then(m => m.ValidateModule) },
  { path: 'register', loadChildren: () => import('./screen/register/register.module').then(m => m.RegisterModule) },
  { path: 'updateProfile',canActivate: [LoginGuard], loadChildren: () => import('./screen/update-profile/update-profile.module').then(m => m.UpdateProfileModule) },
  { path: 'lodgingDetail/:id', canActivate: [LoginGuard],loadChildren: () => import('./screen/lodging-detail/lodging-detail.module').then(m => m.LodgingDetailModule) },
  { path: 'help', loadChildren: () => import('./screen/help/help.module').then(m => m.HelpModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
