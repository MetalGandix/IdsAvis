import { Component } from '@angular/core';
import { PrenotazioneForm } from '../prenotazione-form';
import { ActivatedRoute, Router } from '@angular/router';
import { PrenotazioneFormService } from '../prenotazione-form.service';
import { AvisService } from '../avis.service';
import { OrarioDonazione } from '../orario-donazione';

@Component({
  selector: 'app-prenotazione-form-vista',
  templateUrl: './prenotazione-form-vista.component.html',
  styleUrls: ['./prenotazione-form-vista.component.css']
})
export class PrenotazioneFormVistaComponent {

  prenotazioneForm: PrenotazioneForm;
  orari: OrarioDonazione[];
  showMsg: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orarioDonazioneService: AvisService,
    private prenotazioneFormService: PrenotazioneFormService) {
    this.prenotazioneForm = new PrenotazioneForm();
  }

  vediOrari(){
    this.orarioDonazioneService.findAll().subscribe(data => {
      this.orari = data;
  })
}

  onSubmit() {
    this.prenotazioneFormService.save(this.prenotazioneForm).subscribe(data =>{this.showMsg= true;
    })
  }

  /*gotoPrenotazioneFormList() {
    this.router.navigate(['/prenotazioni']);
  }*/

}
