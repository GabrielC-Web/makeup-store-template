import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailLayoutComponent } from './products-detail-layout.component';

describe('ProductsDetailLayoutComponent', () => {
  let component: ProductsDetailLayoutComponent;
  let fixture: ComponentFixture<ProductsDetailLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsDetailLayoutComponent]
    });
    fixture = TestBed.createComponent(ProductsDetailLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
