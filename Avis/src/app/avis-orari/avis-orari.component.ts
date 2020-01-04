import { Component, OnInit } from '@angular/core';
import { OrarioDonazione } from '../orario-donazione';
import { AvisService } from '../avis.service';

@Component({
  selector: 'app-avis-orari',
  templateUrl: './avis-orari.component.html',
  styleUrls: ['./avis-orari.component.css']
})
export class AvisOrariComponent implements OnInit {

  isCollapsed = false;

  orari: OrarioDonazione[];
  constructor(private orarioDonazioneService: AvisService) { }

  ngOnInit() {
    this.orarioDonazioneService.findAll().subscribe(data =>{
      this.orari = data;
    })
  }

}
