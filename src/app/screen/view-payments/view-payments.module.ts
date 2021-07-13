import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewPaymentsRoutingModule } from './view-payments-routing.module';
import { ViewPaymentsComponent } from './view-payments.component';


@NgModule({
  declarations: [
    ViewPaymentsComponent
  ],
  imports: [
    CommonModule,
    ViewPaymentsRoutingModule
  ]
})
export class ViewPaymentsModule { }
