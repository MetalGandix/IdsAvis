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

  /*login(callback, user) {
  let obs = this.http.post(('user-form'), user)
  obs.subscribe((data: Response) => {
   this.usersUrl = data.user
   callback(data)
  })
 }*/
 
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl+"user");
  }
 
  public save(user: User) {
    return this.http.post<User>(this.userUrl+"user", user);
  }

  public existUser(username: string) {
    return this.http.get<boolean>(this.userUrl+"existUser/"+username);
  }
}