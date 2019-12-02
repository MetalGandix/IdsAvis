import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /*user: User = {                                   //Usate nel login per fare l'esempio
		email: 'test@test.it',
		password: '' ,
		id: -1,
    name: '',
    lastname: '',
    stato: ''
  }
  
  error: boolean = false
  success: boolean = false
  
  login = () => {
		this.user.login((result) => {
      console.log("login result", result);
			if (result.success) {
				// Login eseguito con successo
				this.success = true
				this.error = false
        this.router.navigate(['/user-list'])
        console.log("Login con successo");
			} else {
				// Errore di login
				this.success = false
				this.error = true
			}
		}, this.user)
  }*/
  
  /*loginUser(){

  }*/

  constructor(/*private admin: UserService, private router: Router*/) { }

  ngOnInit() {
  }

}
