import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentPaymentComponent } from './rent-payment.component';

const routes: Routes = [{ path: '', component: RentPaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentPaymentRoutingModule { }
