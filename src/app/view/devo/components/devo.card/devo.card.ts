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
    // 🛡️ Sentinel: Prevent DOM XSS by validating the URL scheme before assignment
    // Programmatically created elements bypass Angular's built-in DomSanitizer
    try {
      const parsedUrl = new URL(url, window.location.origin);
      if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
        console.error('Invalid URL protocol for audio download');
        return;
      }
      const link = document.createElement('a');
      link.href = parsedUrl.href;
      link.download = '';
      link.click();
    } catch (e) {
      console.error('Invalid URL for audio download', e);
    }
  }
}
