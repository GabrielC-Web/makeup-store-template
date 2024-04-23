import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { CmmModule } from 'src/app/common/common.module';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainDropdownMenuComponent } from './components/main-dropdown-menu/main-dropdown-menu.component';
import { MainSidenavMenuComponent } from './components/main-sidenav-menu/main-sidenav-menu.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainDropdownMenuComponent,
    MainSidenavMenuComponent
  ],
  imports: [
    CommonModule,
    CmmModule,
    MainRoutingModule
  ]
})
export class MainModule { }
