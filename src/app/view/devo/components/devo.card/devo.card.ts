import { Component, Input } from '@angular/core';
import { Devo } from '../../models/devo.model';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-devo-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './devo.card.html',
  styleUrl: './devo.card.css',
})
export class DevoCard {
  @Input() devo!: Devo;

  downloadAudio(url: string) {
    // SECURITY: Prevent XSS by blocking javascript: URLs
    if (url.trim().toLowerCase().startsWith('javascript:')) {
      console.error('Invalid audio URL');
      return;
    }
    const link = document.createElement('a');
    link.href = url;
    link.download = '';
    link.click();
  }
}
