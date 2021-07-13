import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccommodationComponent } from './my-accommodation.component';

const routes: Routes = [{ path: '', component: MyAccommodationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccommodationRoutingModule { }
