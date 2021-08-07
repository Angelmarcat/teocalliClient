import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DatePipe} from '@angular/common';
import { PayRoutingModule } from './pay-routing.module';
import { PayComponent } from './pay.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PayComponent
  ],
  imports: [
    CommonModule,
    PayRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe]
})
export class PayModule { }
