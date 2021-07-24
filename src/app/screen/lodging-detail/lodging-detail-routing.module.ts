import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LodgingDetailComponent } from './lodging-detail.component';

const routes: Routes = [{ path: '', component: LodgingDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LodgingDetailRoutingModule { }
