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
    // SECURITY: Validate URL protocol to prevent DOM XSS vulnerabilities
    // By checking the protocol, we prevent execution of malicious javascript: URIs
    try {
      const parsedUrl = new URL(url, window.location.origin);
      if (!['http:', 'https:', 'blob:', 'data:'].includes(parsedUrl.protocol)) {
        console.error('Security Error: Invalid URL protocol for download.');
        return;
      }
    } catch (e) {
      console.error('Security Error: Invalid URL format.');
      return;
    }

    const link = document.createElement('a');
    link.href = url;
    link.download = '';
    link.click();
  }
}
