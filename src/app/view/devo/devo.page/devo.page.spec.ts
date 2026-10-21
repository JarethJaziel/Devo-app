import { Calendar } from 'lucide-angular';
import { LucideAngularModule, Sun, Moon, Star, CalendarDays, Volume2, Download, Copy, Send, Share2, ChevronLeft, ChevronRight } from 'lucide-angular';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoPage } from './devo.page';

describe('DevoPage', () => {
  let component: DevoPage;
  let fixture: ComponentFixture<DevoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevoPage, LucideAngularModule.pick({ Sun: Sun, Moon: Moon, Star: Star, CalendarDays: CalendarDays, Volume2: Volume2, Download: Download, Copy: Copy, Send: Send, Share2: Share2, ChevronLeft: ChevronLeft, ChevronRight: ChevronRight, Calendar: Calendar })]
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
