import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoCard } from './devo.card';

describe('DevoCard', () => {
  let component: DevoCard;
  let fixture: ComponentFixture<DevoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevoCard],
    }).compileComponents();

    fixture = TestBed.createComponent(DevoCard);
    component = fixture.componentInstance;

    // Provide a dummy devo object to satisfy the template bindings
    component.devo = {
      title: 'Test',
      date: '2023-10-27',
      verse: 'Test verse',
      passage: 'Test passage',
      author: 'Test author',
      thought: 'Test thought',
      response: 'Test response',
      bibleInYear: 'Test bible in year',
      bibleText: 'Test bible text',
      content: 'Test content',
      audioUrl: 'https://example.com/audio.mp3',
    };

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
