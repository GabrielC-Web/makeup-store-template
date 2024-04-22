import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreProductCardComponent } from './core-product-card.component';

describe('CoreProductCardComponent', () => {
  let component: CoreProductCardComponent;
  let fixture: ComponentFixture<CoreProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreProductCardComponent]
    });
    fixture = TestBed.createComponent(CoreProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
