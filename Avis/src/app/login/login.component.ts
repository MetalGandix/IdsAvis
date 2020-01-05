import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {

    //model: any = {};

    constructor(
       /* private route: ActivatedRoute,
        private router: Router,
        private http: HttpClient*/
    ) { }

    ngOnInit() {
      //  sessionStorage.setItem('token', '');
    }

    /*login() {
        let url = 'http://localhost:8080/user';
        this.http.post<Observable<boolean>>(url, {
            name: this.model.name,
            password: this.model.password
        }).subscribe(isValid => {
            if (isValid) {
                sessionStorage.setItem('token', btoa(this.model.name + ':' + this.model.password));
                this.router.navigate(['']);
            } else {
                alert("Authentication failed.")
            }
        });
    }*/
}