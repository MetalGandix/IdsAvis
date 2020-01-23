import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avis-page',
  templateUrl: './avis-page.component.html',
  styleUrls: ['./avis-page.component.css']
})
export class AvisPageComponent implements OnInit {

  constructor(private prenotazioneService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  uscita(){
    this.prenotazioneService.logOut();
  }

}
