import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrandComponent } from './brand/brand.component';

const routes: Routes = [{
    path: '',
    component: BrandComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
