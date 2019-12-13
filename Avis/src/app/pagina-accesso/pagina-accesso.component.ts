import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

@Component({
  selector: 'app-pagina-accesso',
  templateUrl: './pagina-accesso.component.html',
  styleUrls: ['./pagina-accesso.component.css']
})
export class PaginaAccessoComponent implements OnInit {

  name: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
      let url = 'http://localhost:8080/user';

      let headers: HttpHeaders = new HttpHeaders({
          'Authorization': 'Basic ' + sessionStorage.getItem('token')
      });

      let options = { headers: headers };
      this.http.post<Observable<Object>>(url, {}, options).
          subscribe(principal => {
              this.name = principal['name'];
          },
          error => {
              if(error.status == 401)
                  alert('Unauthorized');
          }
      );
  }

  logout() {
      sessionStorage.setItem('token', '');
  }
  private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
      } else {
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      return throwError(
        'Something bad happened; please try again later.');
    };
}
