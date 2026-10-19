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
    // Security enhancement: block dangerous protocols
    const lowerUrl = url.trim().toLowerCase();
    if (lowerUrl.startsWith('javascript:') || lowerUrl.startsWith('vbscript:')) {
        console.error('Dangerous URL protocol blocked');
        return;
    }
    const link = document.createElement('a');
    link.href = url;
    link.download = '';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  }
}
