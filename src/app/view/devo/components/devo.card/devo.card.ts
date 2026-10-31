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
    // Security Fix: Prevent DOM XSS by validating the URL protocol
    // Only allow http and https protocols to prevent javascript: or data: URIs
    try {
      const parsedUrl = new URL(url, window.location.origin);
      if (parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:') {
        const link = document.createElement('a');
        link.href = url;
        link.download = '';
        link.click();
      } else {
        console.error('Security Error: Invalid URL protocol for download.');
      }
    } catch (e) {
      console.error('Security Error: Invalid URL format.');
    }
  }
}
