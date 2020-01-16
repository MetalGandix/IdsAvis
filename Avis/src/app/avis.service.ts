import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrarioDonazione } from './orario-donazione'
import { catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer'
  })
};

@Injectable()
export class AvisService {


  handleError: any;
 

  constructor(private http: HttpClient) {}

    avisUrl = 'http://localhost:8080/orariDonazione';
   

   public findAll(): Observable<OrarioDonazione[]> {
     return this.http.get<OrarioDonazione[]>(this.avisUrl)
   }

   public save(orarioDonazione: OrarioDonazione){
     return this.http.post<OrarioDonazione>(this.avisUrl, orarioDonazione);
   }

    deleteOrario(id): Observable<{OrarioDonazione}> {
    const url = `${this.avisUrl}/${id}`;
    return this.http.delete(url, httpOptions)
    .pipe(
      catchError(this.handleError("deleteOrario"))
    );
  }
}


