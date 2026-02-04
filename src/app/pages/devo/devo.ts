import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevoResponse } from './devo.model';
import { DevoService } from './devo.service';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-devo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './devo.html',
  styleUrl: './devo.css'
})
export class Devo implements OnInit {

  devoRes: DevoResponse | null = null;
  selectedDate = new Date().toISOString().split('T')[0];
  rangeStart = '';
  rangeEnd = '';


  constructor(
              private devoService: DevoService,
              private cdr: ChangeDetectorRef
            ) {}

  ngOnInit(): void {
    this.loadDevo(this.selectedDate);
  }

  loadDevo(date: string) {
    this.devoService.getDevo(date).subscribe({
    next: res => {
      this.devoRes = res;
      this.cdr.detectChanges();   // ← fuerza actualización visual
    },
    error: err => console.error(err)
    });
  }

  prevDay() {
    const d = new Date(this.selectedDate);
    d.setDate(d.getDate() - 1);
    this.updateDate(d);
  }

  nextDay() {
    const d = new Date(this.selectedDate);
    d.setDate(d.getDate() + 1);
    this.updateDate(d);
  }

  goToToday() {
    this.updateDate(new Date());
  }

  onDateChange(event: any) {
    this.selectedDate = event.target.value;   // ← FALTABA ESTO
    this.loadDevo(this.selectedDate);
  }


  updateDate(date: Date) {
    this.selectedDate = date.toISOString().split('T')[0];
    this.loadDevo(this.selectedDate);
  }

  loadRange() {
    console.log("Rango solicitado:", this.rangeStart, this.rangeEnd);
    // Aquí luego conectamos con backend si quieres múltiples devocionales
  }

  copyToClipboard(texto: string) {
    navigator.clipboard.writeText(texto);
    alert('¡Mensaje copiado al portapapeles!');
  }

  shareWhatsApp(text: string) {
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  downloadAudio(audioUrl: string) {
    const link = document.createElement('a');
    link.href = audioUrl;
    link.setAttribute('download', ''); // vacío = usar nombre del servidor
    link.target = '_self';             // más efectivo que _blank para algunos navegadores
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


}
