import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LodgingsRoutingModule } from './lodgings-routing.module';
import { LodgingsComponent } from './lodgings.component';


@NgModule({
  declarations: [
    LodgingsComponent
  ],
  imports: [
    CommonModule,
    LodgingsRoutingModule
  ]
})
export class LodgingsModule { }
