import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-devo-preview',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './devo.preview.html',
  styleUrl: './devo.preview.css',
})
export class DevoPreview {

  @Input() whatsapp!: string;
  @Input() web!: string;

  copy(text: string) {
    navigator.clipboard.writeText(text);
  }

  shareWhatsApp(text: string) {
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  async share(text: string) {

    if (navigator.share) {
      await navigator.share({
        text: text
      });
    } else {

      navigator.clipboard.writeText(text);
      alert('Texto copiado para compartir');
    }

  }

}
