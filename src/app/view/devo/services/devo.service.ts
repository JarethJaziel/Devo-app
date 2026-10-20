import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DevoResponse } from '../models/devo.model';

@Injectable({ providedIn: 'root' })
export class DevoService {
  private apiUrl = 'https://devo-service.onrender.com/api/devocionales';

  constructor(private http: HttpClient) { }

  getDevo(fecha: string): Observable<DevoResponse> {
    return this.http.get<DevoResponse>(`${this.apiUrl}/${encodeURIComponent(fecha)}`);
  }

  getRange(fromDate: string, toDate: string): Observable<DevoResponse[]> {
    const params = new HttpParams()
      .set('fromDate', fromDate)
      .set('toDate', toDate);
    return this.http.get<DevoResponse[]>(`${this.apiUrl}/range`, { params });
  }
}