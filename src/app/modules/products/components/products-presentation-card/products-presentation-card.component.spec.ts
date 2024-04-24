import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPresentationCardComponent } from './products-presentation-card.component';

describe('ProductsPresentationCardComponent', () => {
  let component: ProductsPresentationCardComponent;
  let fixture: ComponentFixture<ProductsPresentationCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsPresentationCardComponent]
    });
    fixture = TestBed.createComponent(ProductsPresentationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
