import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyFrontComponent } from './currency-front.component';

describe('CurrencyFrontComponent', () => {
  let component: CurrencyFrontComponent;
  let fixture: ComponentFixture<CurrencyFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
