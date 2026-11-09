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
    // Security Fix: Prevent DOM-based XSS by validating URL protocol
    try {
      const parsedUrl = new URL(url, window.location.origin);
      const deniedProtocols = ['javascript:', 'vbscript:', 'data:'];
      if (deniedProtocols.includes(parsedUrl.protocol)) {
        return;
      }
    } catch (e) {
      return;
    }

    const link = document.createElement('a');
    link.href = url;
    link.download = '';
    link.click();
  }
}
