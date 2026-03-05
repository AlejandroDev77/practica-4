import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modelo360 } from './modelo360';

describe('Modelo360', () => {
  let component: Modelo360;
  let fixture: ComponentFixture<Modelo360>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modelo360],
    }).compileComponents();

    fixture = TestBed.createComponent(Modelo360);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
