import { Component, OnInit } from '@angular/core';
import { AnalisiSangue } from '../analisi-sangue';
import { AnalisiSangueService } from '../analisi-sangue.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-analisi-sangue-list',
  templateUrl: './analisi-sangue-list.component.html',
  styleUrls: ['./analisi-sangue-list.component.css']
})
export class AnalisiSangueListComponent implements OnInit {
  
  showMsg: boolean = false;
  analisi: AnalisiSangue[];
  analisiSangue: AnalisiSangue;
  
  constructor(private AnalisiSangueService: AnalisiSangueService,
              private route: ActivatedRoute,
              private router: Router) {
                this.analisiSangue = new AnalisiSangue();
               }

vediId(id: AnalisiSangue)
{
  console.log(id);
}

  aggiornaAnalisi(analisiSangue: AnalisiSangue){
    console.log(analisiSangue);
    this.AnalisiSangueService.updateAnalisi(analisiSangue).subscribe(()=>{
      this.showMsg=true;
    },err=>{
      console.log(err);
    })

  }

  ngOnInit() {
    this.AnalisiSangueService.findAll().subscribe(data =>{
      this.analisi = data;
    });
  }
}
