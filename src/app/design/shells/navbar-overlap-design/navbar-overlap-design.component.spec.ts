import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOverlapDesignComponent } from './navbar-overlap-design.component';

describe('NavbarOverlapDesignComponent', () => {
  let component: NavbarOverlapDesignComponent;
  let fixture: ComponentFixture<NavbarOverlapDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarOverlapDesignComponent]
    });
    fixture = TestBed.createComponent(NavbarOverlapDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
