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
      // Security: Validate URL to prevent DOM-based XSS (e.g., javascript: URIs)
      const parsedUrl = new URL(url, window.location.origin);
      if (parsedUrl.protocol === 'javascript:' || parsedUrl.protocol === 'vbscript:' || parsedUrl.protocol === 'data:') {
        console.error('Invalid URL protocol for download');
        return;
      }

      const link = document.createElement('a');
      link.href = url;
      link.download = '';
      link.click();
    } catch (e) {
      console.error('Invalid URL provided for download');
    }
  }
}
