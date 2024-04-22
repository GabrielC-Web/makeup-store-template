import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmmModule } from 'src/app/common/common.module';
import { CoreButtonComponent } from './components/core-button/core-button.component';
import { CoreBrandsComponent } from './components/core-brands/core-brands.component';
import { CoreProductCardComponent } from './components/core-product-card/core-product-card.component';


@NgModule({
    declarations: [
        CoreButtonComponent,
        CoreBrandsComponent,
        CoreProductCardComponent
    ],
    imports: [
        CommonModule,
        CmmModule,
    ],
    exports: [
        CoreButtonComponent,
        CoreBrandsComponent,
        CoreProductCardComponent
    ]
})
export class CoreModule { }
