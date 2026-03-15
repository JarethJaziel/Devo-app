import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-date-controls',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './date.controls.html',
  styleUrl: './date.controls.css',
})
export class DateControls {
  @Input() selectedDate!: string;
  @Output() dateChange = new EventEmitter<string>();

  prevDay() {
    const d = new Date(this.selectedDate);
    d.setDate(d.getDate() - 1);
    this.emit(d);
  }

  nextDay() {
    const d = new Date(this.selectedDate);
    d.setDate(d.getDate() + 1);
    this.emit(d);
  }

  today() {
    this.emit(new Date());
  }

  onDateChange(event: any) {
    this.dateChange.emit(event.target.value);
  }

  emit(date: Date) {
    this.dateChange.emit(date.toISOString().split('T')[0]);
  }
}
