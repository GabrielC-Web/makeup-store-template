import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsLayoutComponent } from './pages/products-layout/products-layout.component';
import { ProductsOverviewLayoutComponent } from './pages/products-overview-layout/products-overview-layout.component';
import { ProductsDetailLayoutComponent } from './pages/products-detail-layout/products-detail-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsLayoutComponent
  },
  {
    path: 'overview',
    component: ProductsOverviewLayoutComponent
  },
  {
    path: 'detail',
    component: ProductsDetailLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
