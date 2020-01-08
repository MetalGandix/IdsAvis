import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Dottore {
  constructor(
    username: string,
    password: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(private httpClient: HttpClient){}

  getDottore() {
    return this.httpClient.get<Dottore[]>('http://localhost:8080/dottore');
  }
}
