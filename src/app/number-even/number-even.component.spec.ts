import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberEvenComponent } from './number-even.component';

describe('NumberEvenComponent', () => {
  let component: NumberEvenComponent;
  let fixture: ComponentFixture<NumberEvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberEvenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
