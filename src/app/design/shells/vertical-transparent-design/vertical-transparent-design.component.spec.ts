import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalTransparentDesignComponent } from './vertical-transparent-design.component';

describe('VerticalTransparentDesignComponent', () => {
  let component: VerticalTransparentDesignComponent;
  let fixture: ComponentFixture<VerticalTransparentDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalTransparentDesignComponent]
    });
    fixture = TestBed.createComponent(VerticalTransparentDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
