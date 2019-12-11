import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  templateUrl: './login.component.html'
})


export class LoginComponent implements OnInit{

  user: User;
  users: User[];
  credentials = {email: '', password: ''};

  constructor(private app: UserService, private http: HttpClient, private router: Router) {
  }

  login() {
    this.app.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }

  ngOnInit(){
  }

}