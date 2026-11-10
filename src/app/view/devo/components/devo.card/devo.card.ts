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
    // SECURITY FIX: Validate URL to prevent DOM-based XSS
    // Parse the URL to safely check its protocol against a denylist
    try {
      const parsedUrl = new URL(url, window.location.origin);
      const invalidProtocols = ['javascript:', 'vbscript:', 'data:'];
      if (invalidProtocols.includes(parsedUrl.protocol)) {
        console.error('Invalid URL protocol');
        return;
      }
    } catch (e) {
      console.error('Invalid URL');
      return;
    }

    const link = document.createElement('a');
    // Assign original URL string to preserve Angular <base href> resolution for relative paths
    link.href = url;
    link.download = '';
    link.click();
  }
}
