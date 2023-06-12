import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalDesignComponent } from './vertical-design.component';

describe('VerticalDesignComponent', () => {
  let component: VerticalDesignComponent;
  let fixture: ComponentFixture<VerticalDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalDesignComponent]
    });
    fixture = TestBed.createComponent(VerticalDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
