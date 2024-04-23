import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSidenavMenuComponent } from './main-sidenav-menu.component';

describe('MainSidenavMenuComponent', () => {
  let component: MainSidenavMenuComponent;
  let fixture: ComponentFixture<MainSidenavMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainSidenavMenuComponent]
    });
    fixture = TestBed.createComponent(MainSidenavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
