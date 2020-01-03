import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrenotazioneForm } from './prenotazione-form';

@Injectable()
export class PrenotazioneFormService {

  private prenotazioneFormUrl : string;

  constructor(private http: HttpClient) { 
    this.prenotazioneFormUrl = 'http://localhost:8080/prenotazioneForms';
  }

  public findAll(): Observable<PrenotazioneForm[]> {
    return this.http.get<PrenotazioneForm[]>(this.prenotazioneFormUrl);
  }

  public save(prenotazioneForm: PrenotazioneForm){
    return this.http.post<PrenotazioneForm>(this.prenotazioneFormUrl, prenotazioneForm);
  }

}
