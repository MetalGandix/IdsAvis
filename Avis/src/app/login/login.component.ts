import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{


  credentials = {username: '', password: ''};

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