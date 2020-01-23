import { Component, OnInit } from '@angular/core';
import { PrenotazioneForm } from '../prenotazione-form';
import { ActivatedRoute, Router } from '@angular/router';
import { PrenotazioneFormService } from '../prenotazione-form.service';
import { AvisService } from '../avis.service';
import { OrarioDonazione } from '../orario-donazione';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-prenotazione-form-vista',
  templateUrl: './prenotazione-form-vista.component.html',
  styleUrls: ['./prenotazione-form-vista.component.css']
})
export class PrenotazioneFormVistaComponent implements OnInit  {

  prenotazioneForm: PrenotazioneForm;
  orari: OrarioDonazione[];
  showMsg: boolean = false;
  router: any;


  constructor(
    private orarioDonazioneService: AvisService,
    private prenotazioneFormService: PrenotazioneFormService,
    private prenotazioneService: AuthenticationService) {
    this.prenotazioneForm = new PrenotazioneForm();
  }

  ngOnInit(){
    this.orarioDonazioneService.findAll().subscribe(data => {
      this.orari = data;
  })
}

  onSubmit() {
    this.prenotazioneFormService.save(this.prenotazioneForm).subscribe(() =>{this.showMsg= true;
    })
  }

  uscita(){
    this.prenotazioneService.logOut()
    alert("Hai effettuato il Logout")
    this.router.navigate(['/login'])
    
  }

}
