import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsLayoutComponent } from './pages/products-layout/products-layout.component';
import { ProductsOverviewLayoutComponent } from './pages/products-overview-layout/products-overview-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsLayoutComponent
  }, {
    path: 'overview',
    component: ProductsOverviewLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
