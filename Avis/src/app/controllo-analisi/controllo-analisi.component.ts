import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnalisiSangueService } from '../analisi-sangue.service';
import { AnalisiSangue } from '../analisi-sangue';

@Component({
  selector: 'app-controllo-analisi',
  templateUrl: './controllo-analisi.component.html',
  styleUrls: ['./controllo-analisi.component.css']
})
export class ControlloAnalisiComponent implements OnInit {

  analisi: AnalisiSangue[];
  analisiSangue: AnalisiSangue;
  
  constructor(private AnalisiSangueService: AnalisiSangueService,
    private route: ActivatedRoute,
    private router: Router){ }


    vediAnalisiId(analisi: AnalisiSangue)
    {
    this.AnalisiSangueService.findID(analisi).subscribe()
    console.log(analisi.id)
    }

  ngOnInit() {
    this.AnalisiSangueService.findAll().subscribe(data =>{
      this.analisi = data;
    });
  }


}
