import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnalisiSangue } from './analisi-sangue';
@Injectable({
  providedIn: 'root'
})
export class AnalisiSangueService {
  private AnalisiSangueUrl : string;
  constructor(private http: HttpClient) {this.AnalisiSangueUrl = 'http://localhost:8080/analisi'; }

  public findAll(): Observable<AnalisiSangue[]> {
    return this.http.get<AnalisiSangue[]>(this.AnalisiSangueUrl);
  }

  public save(AnalisiSangue: AnalisiSangue){
    return this.http.post<AnalisiSangue>(this.AnalisiSangueUrl, AnalisiSangue);
  }
}
