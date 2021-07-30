import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'myProfile',
    canActivate: [AdminGuard],
    loadChildren: () => import('./screen/my-profile/my-profile.module').then(m => m.MyProfileModule)
  },
  {
    path: 'home',
    canActivate: [AdminGuard],
    loadChildren: () => import('./screen/home/home.module').then(m => m.HomeModule)
  },
  { path: 'lodgings',canActivate: [AdminGuard], loadChildren: () => import('./screen/lodgings/lodgings.module').then(m => m.LodgingsModule) },
  { path: 'recoverPassword', loadChildren: () => import('./screen/recover-password/recover-password.module').then(m => m.RecoverPasswordModule) },
  { path: 'myAccommodation', canActivate: [AdminGuard], loadChildren: () => import('./screen/my-accommodation/my-accommodation.module').then(m => m.MyAccommodationModule) },
  { path: 'house', canActivate: [AdminGuard], loadChildren: () => import('./screen/house/house.module').then(m => m.HouseModule) },
  { path: 'paymentHistory',canActivate: [AdminGuard], loadChildren: () => import('./screen/payment-history/payment-history.module').then(m => m.PaymentHistoryModule) },
  { path: 'viewPayments',canActivate: [AdminGuard], loadChildren: () => import('./screen/view-payments/view-payments.module').then(m => m.ViewPaymentsModule) },
  { path: 'rentPayment',canActivate: [AdminGuard], loadChildren: () => import('./screen/rent-payment/rent-payment.module').then(m => m.RentPaymentModule) },
  { path: 'pay', canActivate: [AdminGuard],loadChildren: () => import('./screen/pay/pay.module').then(m => m.PayModule) },
  { path: 'login', loadChildren: () => import('./screen/login/login.module').then(m => m.LoginModule) },
  { path: 'validate', loadChildren: () => import('./screen/validate/validate.module').then(m => m.ValidateModule) },
  { path: 'register', loadChildren: () => import('./screen/register/register.module').then(m => m.RegisterModule) },
  { path: 'updateProfile',canActivate: [AdminGuard], loadChildren: () => import('./screen/update-profile/update-profile.module').then(m => m.UpdateProfileModule) },
  { path: 'lodgingDetail', canActivate: [AdminGuard],loadChildren: () => import('./screen/lodging-detail/lodging-detail.module').then(m => m.LodgingDetailModule) },
  { path: 'help', loadChildren: () => import('./screen/help/help.module').then(m => m.HelpModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
