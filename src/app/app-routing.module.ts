import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'myProfile', loadChildren: () => import('./screen/my-profile/my-profile.module').then(m => m.MyProfileModule) }, 
  { path: 'home', loadChildren: () => import('./screen/home/home.module').then(m => m.HomeModule) }, 
  { path: 'lodgings', loadChildren: () => import('./screen/lodgings/lodgings.module').then(m => m.LodgingsModule) }, 
  { path: 'recoverPassword', loadChildren: () => import('./screen/recover-password/recover-password.module').then(m => m.RecoverPasswordModule) }, 
  { path: 'myAccommodation', loadChildren: () => import('./screen/my-accommodation/my-accommodation.module').then(m => m.MyAccommodationModule) }, 
  { path: 'house', loadChildren: () => import('./screen/house/house.module').then(m => m.HouseModule) }, 
  { path: 'paymentHistory', loadChildren: () => import('./screen/payment-history/payment-history.module').then(m => m.PaymentHistoryModule) }, 
  { path: 'viewPayments', loadChildren: () => import('./screen/view-payments/view-payments.module').then(m => m.ViewPaymentsModule) }, 
  { path: 'rentPayment', loadChildren: () => import('./screen/rent-payment/rent-payment.module').then(m => m.RentPaymentModule) }, 
  { path: 'pay', loadChildren: () => import('./screen/pay/pay.module').then(m => m.PayModule) },
  { path: 'login', loadChildren: () => import('./screen/login/login.module').then(m => m.LoginModule) },
  { path: 'validate', loadChildren: () => import('./screen/validate/validate.module').then(m => m.ValidateModule) },
  { path: 'register', loadChildren: () => import('./screen/register/register.module').then(m => m.RegisterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
