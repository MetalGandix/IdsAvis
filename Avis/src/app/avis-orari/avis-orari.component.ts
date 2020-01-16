import { Component, OnInit } from '@angular/core';
import { OrarioDonazione } from '../orario-donazione';
import { AvisService } from '../avis.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-avis-orari',
  templateUrl: './avis-orari.component.html',
  styleUrls: ['./avis-orari.component.css'],
  //template: '<button (click)="cancellaOrario()">Click</button>'
})
export class AvisOrariComponent implements OnInit {



  isCollapsed = false;

  orari: OrarioDonazione[];
  donazione: OrarioDonazione;




  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orarioDonazioneService: AvisService) { }

  cancellaOrario(id: OrarioDonazione){
    console.log(id)
    this.orarioDonazioneService
      .deleteOrario(id)
      .subscribe(() => console.log("orario cancellato "));
      };



  vedereId(){
    console.log(this.orari)
  }

      /*data => {
        this.orari = this.orari.filter(data => data !== orari*/
  

  ngOnInit() {
    this.orarioDonazioneService.findAll().subscribe(data => {
      this.orari = data;
    })
  }

 

}