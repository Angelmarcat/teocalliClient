import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidateRoutingModule } from './validate-routing.module';
import { ValidateComponent } from './validate.component';


@NgModule({
  declarations: [
    ValidateComponent
  ],
  imports: [
    CommonModule,
    ValidateRoutingModule
  ]
})
export class ValidateModule { }
