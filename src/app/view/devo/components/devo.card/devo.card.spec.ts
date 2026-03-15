import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoCard } from './devo.card';

describe('DevoCard', () => {
  let component: DevoCard;
  let fixture: ComponentFixture<DevoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
