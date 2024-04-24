import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOverviewLayoutComponent } from './products-overview-layout.component';

describe('ProductsOverviewLayoutComponent', () => {
  let component: ProductsOverviewLayoutComponent;
  let fixture: ComponentFixture<ProductsOverviewLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsOverviewLayoutComponent]
    });
    fixture = TestBed.createComponent(ProductsOverviewLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
