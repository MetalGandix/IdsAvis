import { Component, OnInit } from '@angular/core';
import { OrarioDonazione } from '../orario-donazione';
import { AvisService } from '../avis.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-avis-orari',
  templateUrl: './avis-orari.component.html',
  styleUrls: ['./avis-orari.component.css'],

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
    console.log(id.id)
    this.orarioDonazioneService
      .deleteOrario(id.id)
      .subscribe(res=>{
        console.log(res)
      }, err => {
        console.log(err)
      });
      };

      refresh(): void {
        window.location.reload();
    }



  

  ngOnInit() {
    this.orarioDonazioneService.findAll().subscribe(data => {
      this.orari = data;
    })
  }

 

}