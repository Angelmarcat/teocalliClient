import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LodgingsComponent } from './lodgings.component';

const routes: Routes = [{ path: '', component: LodgingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LodgingsRoutingModule { }
