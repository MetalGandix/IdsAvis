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
  private analisiSangueEmail = 'http://localhiost:8080/send-mail';

  public findAll(): Observable<AnalisiSangue[]> {
    return this.http.get<AnalisiSangue[]>(this.analisiUrl);
  }



  public findID(AnalisiSangue: AnalisiSangue): Observable<AnalisiSangue>{
    const url = `${this.analisiUrl}/${AnalisiSangue.id}`;
    return this.http.get<AnalisiSangue>(url)
  }


  public updateAnalisi(AnalisiSangue: AnalisiSangue): Observable<AnalisiSangue> {
    const url = `${this.analisiSanguesUrl}/${AnalisiSangue.id}`;
    return this.http.put<AnalisiSangue>(url,AnalisiSangue, httpOptions);
   }

   
  public vediAnalisi(AnalisiSangue: AnalisiSangue): Observable<AnalisiSangue> {
    const url = `${this.analisiSanguesUrl}/${AnalisiSangue.id}`;
    return this.http.get<AnalisiSangue>(url);
   }
}