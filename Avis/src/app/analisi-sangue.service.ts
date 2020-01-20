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

  private analisiUrl = 'http://localhost:8080/analisi'; 
  private analisiSanguesUrl = 'http://localhost:8080/analisiSangues'; 

  public findAll(): Observable<AnalisiSangue[]> {
    return this.http.get<AnalisiSangue[]>(this.analisiUrl);
  }

  public save(AnalisiSangue: AnalisiSangue){
    return this.http.post<AnalisiSangue>(this.analisiUrl, AnalisiSangue);
  }


  public updateAnalisi(AnalisiSangue: AnalisiSangue): Observable<AnalisiSangue> {
    const url = `${this.analisiSanguesUrl}/${AnalisiSangue.id}`;
    return this.http.put<AnalisiSangue>(url,AnalisiSangue, httpOptions);
   }
}