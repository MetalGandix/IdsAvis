import { Component, OnInit } from '@angular/core';
import {  UserDTO } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-gestione-utenti',
  templateUrl: './gestione-utenti.component.html',
  styleUrls: ['./gestione-utenti.component.css']
})
export class GestioneUtentiComponent implements OnInit {
  isCollapsed = false;
  user: UserDTO[];
  password: UserDTO;


  constructor(    
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) { }

    
 /* cancellaUser(id: UserDTO){
    console.log(id.id)
    this.userService
      .deleteUser(id.id)
      .subscribe(res=>{
        console.log(res)
      }, err => {
        console.log(err)
      });
      };
      */


  refresh(): void {
    window.location.reload();
}
vedereId(){
  console.log(this.user)
}
  

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.user = data;
    })
  }
  }


