import { LucideAngularModule, CalendarDays, Volume2, Download } from 'lucide-angular';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoCard } from './devo.card';

describe('DevoCard', () => {
  let component: DevoCard;
  let fixture: ComponentFixture<DevoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevoCard, LucideAngularModule.pick({ CalendarDays: CalendarDays, Volume2: Volume2, Download: Download })]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevoCard);
    component = fixture.componentInstance;
    component.devo = { date: '', title: '', content: '', verse: '', passage: '', author: '', thought: '', response: '', bibleInYear: '', bibleText: '', audioUrl: '' }; fixture.detectChanges(); await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
