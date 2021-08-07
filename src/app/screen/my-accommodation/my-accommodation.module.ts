import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MyAccommodationRoutingModule } from './my-accommodation-routing.module';
import { MyAccommodationComponent } from './my-accommodation.component';


@NgModule({
  declarations: [
    MyAccommodationComponent
  ],
  imports: [
    CommonModule,
    MyAccommodationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MyAccommodationModule { }
