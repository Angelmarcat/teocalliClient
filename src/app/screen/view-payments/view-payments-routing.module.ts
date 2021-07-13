import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPaymentsComponent } from './view-payments.component';

const routes: Routes = [{ path: '', component: ViewPaymentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPaymentsRoutingModule { }
