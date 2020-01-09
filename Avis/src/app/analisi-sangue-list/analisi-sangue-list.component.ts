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


  toggleGlobuliRossi = true;
  toggleGlobuliBianchi = true;
  toggleEmoglobina = true;
  toggleEmatocrito = true;
  toggleMcv = true;
  toggleMch = true;
  toggleMchc = true;
  togglePiastrine = true;
  
  status = 'Enable'; 

  enableDisableRuleGlobuliRossi() {
      this.toggleGlobuliRossi = !this.toggleGlobuliRossi;
      this.status = this.toggleGlobuliRossi ? 'Enable' : 'Disable';
  }

  enableDisableRuleGlobuliBianchi() {
    this.toggleGlobuliBianchi = !this.toggleGlobuliBianchi;
    this.status = this.toggleGlobuliBianchi ? 'Enable' : 'Disable';
}

enableDisableRuleEmoglobina() {
  this.toggleEmoglobina = !this.toggleEmoglobina;
  this.status = this.toggleEmoglobina ? 'Enable' : 'Disable';
}

enableDisableRuleEmatocrito() {
  this.toggleEmatocrito = !this.toggleEmatocrito;
  this.status = this.toggleEmatocrito ? 'Enable' : 'Disable';
}

enableDisableRuleMcv() {
  this.toggleMcv = !this.toggleMcv;
  this.status = this.toggleMcv ? 'Enable' : 'Disable';
}

enableDisableRuleMch() {
  this.toggleMch = !this.toggleMch;
  this.status = this.toggleMch ? 'Enable' : 'Disable';
}

enableDisableRuleMchc() {
  this.toggleMchc = !this.toggleMchc;
  this.status = this.toggleMchc ? 'Enable' : 'Disable';
}

enableDisableRulePiastrine() {
  this.togglePiastrine = !this.togglePiastrine;
  this.status = this.togglePiastrine ? 'Enable' : 'Disable';
}

  ngOnInit() {
    this.AnalisiSangueService.findAll().subscribe(data =>{
      this.analisi = data;
    });
  }
}
