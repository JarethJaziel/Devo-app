import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoPreview } from './devo.preview';

describe('DevoPreview', () => {
  let component: DevoPreview;
  let fixture: ComponentFixture<DevoPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevoPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevoPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
