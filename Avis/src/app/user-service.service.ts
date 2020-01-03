import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
 
@Injectable()
export class UserService {
 
  private userUrl: string
 
  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/user';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }
 
  public save(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }
}