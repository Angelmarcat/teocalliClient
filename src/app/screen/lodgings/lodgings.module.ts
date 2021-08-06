import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LodgingsRoutingModule } from './lodgings-routing.module';
import { LodgingsComponent } from './lodgings.component';


@NgModule({
  declarations: [
    LodgingsComponent
  ],
  imports: [
    CommonModule,
    LodgingsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LodgingsModule { }
