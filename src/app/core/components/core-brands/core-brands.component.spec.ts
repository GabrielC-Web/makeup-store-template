import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreBrandsComponent } from './core-brands.component';

describe('CoreBrandsComponent', () => {
  let component: CoreBrandsComponent;
  let fixture: ComponentFixture<CoreBrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreBrandsComponent]
    });
    fixture = TestBed.createComponent(CoreBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
