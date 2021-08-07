import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DatePipe} from '@angular/common';
import { PayRoutingModule } from './pay-routing.module';
import { PayComponent } from './pay.component';


@NgModule({
  declarations: [
    PayComponent
  ],
  imports: [
    CommonModule,
    PayRoutingModule
  ],
  providers: [DatePipe]
})
export class PayModule { }
