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
    // SECURITY: Validate URL scheme to prevent XSS via javascript:, vbscript: or data: URIs
    // Allow relative URLs (starts with / or .), blob: URLs, and http/https URLs.
    if (/^(javascript|data|vbscript):/i.test(url.trim())) {
      console.error('Invalid URL scheme for download');
      return;
    }

    const link = document.createElement('a');
    link.href = url;
    link.download = '';
    link.click();
  }
}
