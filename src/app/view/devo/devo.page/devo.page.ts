import { Component } from '@angular/core';
import { DevoService } from '../services/devo.service';
import { DevoResponse } from '../models/devo.model';
import { Observable } from 'rxjs';
import { DevoCard } from '../components/devo.card/devo.card';
import { DateControls } from '../components/date.controls/date.controls';
import { AsyncPipe, CommonModule } from '@angular/common';
import { DevoPreview } from '../components/devo.preview/devo.preview';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-devo.page',
  standalone: true,
  imports: [AsyncPipe, CommonModule, DateControls, DevoCard, DevoPreview, LucideAngularModule],
  templateUrl: './devo.page.html',
  styleUrl: './devo.page.css',
})
export class DevoPage {

  selectedDate = new Date().toISOString().split('T')[0];

  devo$!: Observable<DevoResponse>;

  constructor(private devoService: DevoService) {
    this.loadDevo(this.selectedDate);
  }

  loadDevo(date: string) {
    this.devo$ = this.devoService.getDevo(date);
  }

  changeDate(date: string) {
    this.selectedDate = date;
    this.loadDevo(date);
  }

  goToday() {
    const today = new Date().toISOString().split('T')[0];
    this.changeDate(today);
  }


}
