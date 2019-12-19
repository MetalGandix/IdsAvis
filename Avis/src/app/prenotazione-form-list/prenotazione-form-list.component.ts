import { Component, OnInit } from '@angular/core';
import { PrenotazioneForm } from '../prenotazione-form';
import { PrenotazioneFormService } from '../prenotazione-form.service';

@Component({
  selector: 'app-prenotazione-form-list',
  templateUrl: './prenotazione-form-list.component.html',
  styleUrls: ['./prenotazione-form-list.component.css']
})
export class PrenotazioneFormListComponent implements OnInit {

  prenotazioni: PrenotazioneForm[];

  constructor(private prenotazioneFormService: PrenotazioneFormService) {

   }

  ngOnInit() {
    this.prenotazioneFormService.findAll().subscribe(data =>{
      this.prenotazioni = data;
    });
  }

}
