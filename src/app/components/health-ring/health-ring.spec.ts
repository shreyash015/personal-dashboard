import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthRing } from './health-ring';

describe('HealthRing', () => {
  let component: HealthRing;
  let fixture: ComponentFixture<HealthRing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthRing],
    }).compileComponents();

    fixture = TestBed.createComponent(HealthRing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
