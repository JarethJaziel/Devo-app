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
    // Security: Validate URL protocol to prevent DOM-based XSS when dynamically assigning href.
    // Preserving relative path resolution by assigning original url string if valid.
    try {
      const parsedUrl = new URL(url, window.location.origin);
      const invalidProtocols = ['javascript:', 'vbscript:', 'data:'];
      if (invalidProtocols.includes(parsedUrl.protocol)) {
        console.error('Security Error: Invalid URL protocol for download.');
        return;
      }
    } catch (e) {
      // Invalid URL format
      console.error('Security Error: Malformed URL provided.');
      return;
    }

    const link = document.createElement('a');
    link.href = url;
    link.download = '';
    link.click();
  }
}
