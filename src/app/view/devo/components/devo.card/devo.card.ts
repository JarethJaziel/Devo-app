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
    // Security Fix: Validate URL to prevent DOM-based XSS
    try {
      const urlObj = new URL(url, window.location.origin);
      if (urlObj.protocol === 'http:' || urlObj.protocol === 'https:') {
        const link = document.createElement('a');
        link.href = urlObj.href;
        link.download = '';
        link.click();
      } else {
        console.error('Invalid URL protocol');
      }
    } catch (e) {
      console.error('Invalid URL provided');
    }
  }
}
