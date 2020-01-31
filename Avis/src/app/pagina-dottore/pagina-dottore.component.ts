import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-pagina-dottore',
  templateUrl: './pagina-dottore.component.html',
  styleUrls: ['./pagina-dottore.component.css']
})
export class PaginaDottoreComponent implements OnInit {

  constructor(private prenotazioneService: AuthenticationService,
    private userService: UserService) { }

  router: any;


  uscita(){
    this.prenotazioneService.logOut()
  }

  ngOnInit() {
  }

  avvisoDonazioneEmergenza(){
    alert('Il messaggio della donazione di emergenza è stato mandato');
  }

  chiamaUtente(){
    this.userService.callUserEmergenza().subscribe()
    alert('Il messaggio della donazione di emergenza è stato mandato');
  }


}
