import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoCard } from './devo.card';
import { LucideAngularModule, CalendarDays, Volume2, Download } from 'lucide-angular';

describe('DevoCard', () => {
  let component: DevoCard;
  let fixture: ComponentFixture<DevoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DevoCard,
        LucideAngularModule.pick({ CalendarDays, Volume2, Download })
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevoCard);
    component = fixture.componentInstance;
    component.devo = {
      date: '2023-10-15',
      title: 'Test',
      content: '',
      verse: '',
      passage: '',
      author: '',
      thought: '',
      response: '',
      bibleInYear: '',
      bibleText: '',
      audioUrl: 'https://example.com/audio.mp3'
    };
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
