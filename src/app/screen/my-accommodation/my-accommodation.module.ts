import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccommodationRoutingModule } from './my-accommodation-routing.module';
import { MyAccommodationComponent } from './my-accommodation.component';


@NgModule({
  declarations: [
    MyAccommodationComponent
  ],
  imports: [
    CommonModule,
    MyAccommodationRoutingModule
  ]
})
export class MyAccommodationModule { }
