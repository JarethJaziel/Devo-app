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
    // 🛡️ Sentinel: Validate URL protocol to prevent XSS via javascript: or data: URIs while supporting relative URLs
    if (/^(javascript|data|vbscript):/i.test(url.trim())) {
      console.error('Security Error: Invalid audio URL protocol');
      return;
    }

    const link = document.createElement('a');
    link.href = url;
    link.download = '';
    link.click();
  }
}
