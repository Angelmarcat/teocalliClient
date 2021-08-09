import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MyAccommodationRoutingModule } from './my-accommodation-routing.module';
import { MyAccommodationComponent } from './my-accommodation.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    MyAccommodationComponent
  ],
  imports: [
    CommonModule,
    MyAccommodationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe]
})
export class MyAccommodationModule { }
