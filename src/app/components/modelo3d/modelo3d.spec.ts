import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modelo3d } from './modelo3d';

describe('Modelo3d', () => {
  let component: Modelo3d;
  let fixture: ComponentFixture<Modelo3d>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modelo3d],
    }).compileComponents();

    fixture = TestBed.createComponent(Modelo3d);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
