import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedIconComponent } from './fixed-icon.component';

describe('FixedIconComponent', () => {
  let component: FixedIconComponent;
  let fixture: ComponentFixture<FixedIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
