import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CanActivate, RouteConfigLoadEnd, Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";

export class Dottore{
  constructor(
    public username: string,
    public password: string
     ) {}
}

export class User{
  constructor(
    public username: string,
    public password: string
  ) {}
}



export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient, private router: Router) { 
     }

  authenticate(username, password) {
    return this.httpClient.post<any>('http://localhost:8080/authenticate',{username,password}).pipe(
      map(
        userData => {
        sessionStorage.setItem('username',username);
        let tokenStr= userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
        }
      )

    );
  }
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('token');
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  getRole(){
    let token = jwt_decode(sessionStorage.getItem('token'));
    return token['role'];
  }
}