import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
 
@Injectable()
export class UserService {
 
  private userUrl: string

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/';
    
    
  }
 
  
 
  public save(user: User) {
    return this.http.post<User>(this.userUrl+"user", user);
  }

  public callUserEmergenza():Observable<User[]> {
    
    return this.http.get<User[]>(this.userUrl+ "users");
  }

  public existUser(username: string) {
    return this.http.get<boolean>(this.userUrl+"existUser/"+username);
  }
}