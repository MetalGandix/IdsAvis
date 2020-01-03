import { Component} from '@angular/core';
import { PrenotazioneForm } from '../prenotazione-form';
import { ActivatedRoute, Router } from '@angular/router';
import { PrenotazioneFormService } from '../prenotazione-form.service';

@Component({
  selector: 'app-prenotazione-form-vista',
  templateUrl: './prenotazione-form-vista.component.html',
  styleUrls: ['./prenotazione-form-vista.component.css']
})
export class PrenotazioneFormVistaComponent{

  prenotazioneForm: PrenotazioneForm;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private prenotazioneFormService: PrenotazioneFormService){
           this.prenotazioneForm = new PrenotazioneForm();
          }

  onSubmit(){
<<<<<<< HEAD
    this.prenotazioneFormService.save(this.prenotazioneForm).subscribe(result => this.gotoPrenotazioneFormList());
  }
  
  gotoPrenotazioneFormList(){
    this.router.navigate(['/prenotazioni']);  
  }
=======
    this.prenotazioneFormService.save(this.prenotazioneForm).subscribe(/*result => this.gotoPrenotazioneFormList()*/);
  }
  
  /*gotoPrenotazioneFormList(){
    this.router.navigate(['/prenotazioni']);  
  }*/
>>>>>>> parent of 0e04424... Capito alcune cose riguardanti i controller, però mi manda tutti NULL

}
