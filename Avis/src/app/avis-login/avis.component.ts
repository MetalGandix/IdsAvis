import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

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
          this.router.navigate(['/avis-page'])
          this.invalidLogin = false
          alert("Bentornata Avis")
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
