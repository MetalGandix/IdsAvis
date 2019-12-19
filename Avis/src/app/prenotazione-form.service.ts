import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrenotazioneForm } from './prenotazione-form';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneFormService {

  private prenotazioniUrl : string;

  constructor(private http: HttpClient) { 
    this.prenotazioniUrl = 'http://localhost:8080/prenotazioni';
  }

  public findAll(): Observable<PrenotazioneForm[]> {
    return this.http.get<PrenotazioneForm[]>(this.prenotazioniUrl);
  }

  public save(prenotazioneForm: PrenotazioneForm){
    return this.http.post<PrenotazioneForm>(this.prenotazioniUrl, prenotazioneForm);
  }

}
