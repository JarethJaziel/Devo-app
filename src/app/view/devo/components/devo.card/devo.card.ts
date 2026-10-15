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
    try {
      // 🛡️ SECURITY: Validate URL protocol to prevent DOM XSS via javascript: URIs
      const parsedUrl = new URL(url, window.location.origin);
      if (parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:') {
        const link = document.createElement('a');
        link.href = parsedUrl.href;
        link.download = '';
        link.click();
      } else {
        console.error('Security Error: Invalid URL protocol for audio download');
      }
    } catch (e) {
      console.error('Security Error: Invalid URL format for audio download');
    }
  }
}
