import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDropdownMenuComponent } from './main-dropdown-menu.component';

describe('MainDropdownMenuComponent', () => {
  let component: MainDropdownMenuComponent;
  let fixture: ComponentFixture<MainDropdownMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainDropdownMenuComponent]
    });
    fixture = TestBed.createComponent(MainDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
