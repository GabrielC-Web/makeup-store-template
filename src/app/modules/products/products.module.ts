import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsLayoutComponent } from './pages/products-layout/products-layout.component';
import { CmmModule } from 'src/app/common/common.module';
import { ProductsOverviewLayoutComponent } from './pages/products-overview-layout/products-overview-layout.component';
import { ProductsDetailLayoutComponent } from './pages/products-detail-layout/products-detail-layout.component';
import { ProductsPresentationCardComponent } from './components/products-presentation-card/products-presentation-card.component';


@NgModule({
  declarations: [
    ProductsLayoutComponent,
    ProductsOverviewLayoutComponent,
    ProductsDetailLayoutComponent,
    ProductsPresentationCardComponent
  ],
  imports: [
    CommonModule,
    CmmModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
