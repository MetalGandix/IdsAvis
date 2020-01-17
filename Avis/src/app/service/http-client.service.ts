import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Dottore {
  constructor(
    username: string,
    password: string
  ) { }
}

export class User {
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
 
}
