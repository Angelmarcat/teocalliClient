import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateProfileRoutingModule } from './update-profile-routing.module';
import { UpdateProfileComponent } from './update-profile.component';


@NgModule({
  declarations: [
    UpdateProfileComponent
  ],
  imports: [
    CommonModule,
    UpdateProfileRoutingModule
  ]
})
export class UpdateProfileModule { }
