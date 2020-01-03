import { Component, OnInit } from '@angular/core';
import { AnalisiSangue } from '../analisi-sangue';
import { AnalisiSangueService } from '../analisi-sangue.service';

@Component({
  selector: 'app-analisi-sangue-list',
  templateUrl: './analisi-sangue-list.component.html',
  styleUrls: ['./analisi-sangue-list.component.css']
})
export class AnalisiSangueListComponent implements OnInit {
  

  analisi: AnalisiSangue[];
  constructor(private AnalisiSangueService: AnalisiSangueService) { }

  ngOnInit() {
    this.AnalisiSangueService.findAll().subscribe(data =>{
      this.analisi = data;
    });
  }
}
