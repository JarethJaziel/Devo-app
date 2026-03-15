import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoPage } from './devo.page';

describe('DevoPage', () => {
  let component: DevoPage;
  let fixture: ComponentFixture<DevoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevoPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevoPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
