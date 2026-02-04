import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Devo } from './devo';

describe('Devo', () => {
  let component: Devo;
  let fixture: ComponentFixture<Devo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Devo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Devo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
