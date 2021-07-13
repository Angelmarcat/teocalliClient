import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentPaymentRoutingModule } from './rent-payment-routing.module';
import { RentPaymentComponent } from './rent-payment.component';


@NgModule({
  declarations: [
    RentPaymentComponent
  ],
  imports: [
    CommonModule,
    RentPaymentRoutingModule
  ]
})
export class RentPaymentModule { }
