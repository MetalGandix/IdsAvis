import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-dottore',
  templateUrl: './dottore.component.html',
  styleUrls: ['./dottore.component.css']
})
export class DottoreComponent implements OnInit {

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
        this.router.navigate(['/dottore'])
        this.invalidLogin = false
        alert("Bentornato dottore")
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
