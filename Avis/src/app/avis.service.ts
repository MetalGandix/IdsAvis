import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrarioDonazione } from './orario-donazione'
import { catchError } from 'rxjs/operators';



@Injectable()
export class AvisService {

  private avisUrl: string;
  handleError: any;

   /* httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };*/

  constructor(private http: HttpClient) {
    this.avisUrl = 'http://localhost:8080/orariDonazione';
   }

   public findAll(): Observable<OrarioDonazione[]> {
     return this.http.get<OrarioDonazione[]>(this.avisUrl)
   }

   public save(orarioDonazione: OrarioDonazione){
     return this.http.post<OrarioDonazione>(this.avisUrl, orarioDonazione);
   }

   public delete(orarioDonazione: OrarioDonazione) {
    return this.http.delete<OrarioDonazione>(this.avisUrl + "/"+ orarioDonazione);
  }
}


