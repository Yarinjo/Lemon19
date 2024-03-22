import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCalculatorComponent } from './the-calculator.component';

describe('TheCalculatorComponent', () => {
  let component: TheCalculatorComponent;
  let fixture: ComponentFixture<TheCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TheCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
