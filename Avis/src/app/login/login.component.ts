import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {

    username = ''
    password = ''
    invalidLogin = false

    constructor(private router: Router,
        private loginservice: AuthenticationService) { }

    ngOnInit() {
    }

    checkLogin() {
        (this.loginservice.authenticate(this.username, this.password).subscribe(
          data => {
            this.router.navigate(['/prenotazione-form-vista'])
            this.invalidLogin = false
          },
          error => {
            if(this.invalidLogin = true){
              alert("Il login è errato")
            }
            
    
          }
        )
        );
    
      }
    }
    