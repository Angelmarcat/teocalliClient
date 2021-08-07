import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DatePipe} from '@angular/common';
import { LodgingDetailRoutingModule } from './lodging-detail-routing.module';
import { LodgingDetailComponent } from './lodging-detail.component';


@NgModule({
  declarations: [
    LodgingDetailComponent
  ],
  imports: [
    CommonModule,
    LodgingDetailRoutingModule
  ],
  providers: [DatePipe]
})
export class LodgingDetailModule { }
