import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrarioDonazione } from './orario-donazione'

@Injectable()
export class AvisService {

  private avisUrl: string

  constructor(private http: HttpClient) {
    this.avisUrl = 'http://localhost:8080/orariDonazione';
   }

   public findAll(): Observable<OrarioDonazione[]> {
     return this.http.get<OrarioDonazione[]>(this.avisUrl)
   }

   public save(orarioDonazione: OrarioDonazione){
     return this.http.post<OrarioDonazione>(this.avisUrl, orarioDonazione);
   }
}
