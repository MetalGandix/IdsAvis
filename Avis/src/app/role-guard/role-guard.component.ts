import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-role-guard',
  templateUrl: './role-guard.component.html',
  styleUrls: ['./role-guard.component.css']
})
export class RoleGuardComponent implements OnInit {


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    switch(route.routeConfig.path){
      case 'avis-page':
      case 'avis-mettiorari':
      case 'avis-orari':
      case 'statistiche': {
        if(this.authService.getRole().authority=='ROLE_AVIS'){
          return true;
        }else{
          return false;
        }
        
      }
      case 'prenotazione-form-vista' :
        if(this.authService.getRole().authority=='ROLE_UTENTE'){
          return true;
        }else{
          return false;
        }

      case 'analisi-sangue-list' :
      case 'pagina-dottore' :
      case 'prenotazione-form-list' :
    
        if(this.authService.getRole().authority=='ROLE_DOTTORE'){
          return true;
        }else{
          return false;
        }

      default: return false;
    }
  }

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

}
