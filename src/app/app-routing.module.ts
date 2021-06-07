import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrandComponent } from './brand/brand.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { PortfolioManagerComponent } from './portfolio-manager/portfolio-manager.component';

const routes: Routes = [{
    path: '',
    component: BrandComponent
  },{
    path: 'brand/list',
    component: BrandListComponent
  },
  {
    path: 'portfolio/manager',
    component: PortfolioManagerComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
