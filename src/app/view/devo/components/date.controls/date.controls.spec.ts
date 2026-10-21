import { Calendar } from 'lucide-angular';
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateControls } from './date.controls';

describe('DateControls', () => {
  let component: DateControls;
  let fixture: ComponentFixture<DateControls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateControls, LucideAngularModule.pick({ ChevronLeft: ChevronLeft, ChevronRight: ChevronRight, Calendar: Calendar })]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateControls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
