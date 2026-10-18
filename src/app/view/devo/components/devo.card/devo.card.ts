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
    // SECURITY: Validate URL protocol to prevent DOM XSS via javascript: URIs
    try {
      const parsedUrl = new URL(url, window.location.origin);
      if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
        console.error('Invalid protocol for audio download');
        return;
      }
    } catch (e) {
      console.error('Invalid URL for audio download');
      return;
    }

    const link = document.createElement('a');
    link.href = url;
    link.download = '';
    link.click();
  }
}
