import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnalisiSangue } from './analisi-sangue';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AnalisiSangueService {

  constructor(private http: HttpClient) {}

  AnalisiSangueUrl = 'http://localhost:8080/analisi'; 

  public findAll(): Observable<AnalisiSangue[]> {
    return this.http.get<AnalisiSangue[]>(this.AnalisiSangueUrl);
  }

  public save(AnalisiSangue: AnalisiSangue){
    return this.http.post<AnalisiSangue>(this.AnalisiSangueUrl, AnalisiSangue);
  }


  public updateAnalisi(AnalisiSangue: AnalisiSangue): Observable<AnalisiSangue> {
    const url = `${this.AnalisiSangueUrl}/${AnalisiSangue}`;
    return this.http.put<AnalisiSangue>(url, httpOptions);
   }
}