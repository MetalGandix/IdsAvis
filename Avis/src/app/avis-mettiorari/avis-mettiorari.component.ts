import { Component, OnInit } from '@angular/core';
import { OrarioDonazione } from '../orario-donazione';
import { ActivatedRoute, Router } from '@angular/router';
import { AvisService } from '../avis.service';

@Component({
  selector: 'app-avis-mettiorari',
  templateUrl: './avis-mettiorari.component.html',
  styleUrls: ['./avis-mettiorari.component.css']
})
export class AvisMettiorariComponent implements OnInit {
  
  ngOnInit() {
  }


  donazione: OrarioDonazione;
  showMsg: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private avisService: AvisService) {
    this.donazione = new OrarioDonazione();
  }


  onSubmit() {
    this.avisService.save(this.donazione).subscribe(data =>{this.showMsg= true;
    })
  }

}
