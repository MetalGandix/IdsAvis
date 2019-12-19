import { Component, OnInit } from '@angular/core';
import { PrenotazioneForm } from '../prenotazione-form';
import { ActivatedRoute, Router } from '@angular/router';
import { PrenotazioneFormService } from '../prenotazione-form.service';

@Component({
  selector: 'app-prenotazione-form-vista',
  templateUrl: './prenotazione-form-vista.component.html',
  styleUrls: ['./prenotazione-form-vista.component.css']
})
export class PrenotazioneFormVistaComponent implements OnInit {

  prenotazioneForm: PrenotazioneForm;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private prenotazioneFormService: PrenotazioneFormService)
         {
           this.prenotazioneForm = new PrenotazioneForm();
          }

  onSubmit(){
    this.prenotazioneFormService.save(this.prenotazioneForm).subscribe(result => this.gotoPrenotazioneFormList());
  }
  gotoPrenotazioneFormList(){
    this.router.navigate(['/prenotazioni']);  
  }

  ngOnInit() {
  }

}
