import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { Calendar, CalendarDays, ChevronLeft, ChevronRight, Copy, Download, LucideAngularModule, Send, Share2, Sun, Volume2 } from 'lucide-angular';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      LucideAngularModule.pick({
        Sun,
        ChevronLeft,
        ChevronRight,
        CalendarDays,
        Volume2,
        Download,
        Calendar,
        Copy,
        Send,
        Share2
      })
    )
  ]
});
