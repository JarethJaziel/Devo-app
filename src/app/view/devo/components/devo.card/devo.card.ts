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
    // Security: Validate URL protocol to prevent DOM-based XSS (e.g. javascript: URIs)
    try {
      const parsedUrl = new URL(url, window.location.origin);
      const protocol = parsedUrl.protocol.toLowerCase();
      if (protocol === 'javascript:' || protocol === 'vbscript:' || protocol === 'data:') {
        console.error('Security error: Unsafe URL protocol detected.');
        return;
      }
    } catch (e) {
      console.error('Invalid URL', e);
      return;
    }

    const link = document.createElement('a');
    link.href = url;
    link.download = '';
    link.click();
  }
}
