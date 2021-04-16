import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOddComponent } from './number-odd.component';

describe('NumberOddComponent', () => {
  let component: NumberOddComponent;
  let fixture: ComponentFixture<NumberOddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberOddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
