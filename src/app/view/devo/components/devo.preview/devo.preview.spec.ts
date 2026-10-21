import { LucideAngularModule, Copy, Send, Share2 } from 'lucide-angular';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoPreview } from './devo.preview';

describe('DevoPreview', () => {
  let component: DevoPreview;
  let fixture: ComponentFixture<DevoPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevoPreview, LucideAngularModule.pick({ Copy: Copy, Send: Send, Share2: Share2 })]
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
