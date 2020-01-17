import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PaginaAccessoComponent } from './pagina-accesso/pagina-accesso.component';
import { LoginComponent } from './login/login.component';
import { PrenotazioneFormListComponent } from './prenotazione-form-list/prenotazione-form-list.component';
import { PrenotazioneFormVistaComponent } from './prenotazione-form-vista/prenotazione-form-vista.component';
import { AnalisiSangueListComponent } from './analisi-sangue-list/analisi-sangue-list.component';
import { AvisOrariComponent } from './avis-orari/avis-orari.component';
import { AvisMettiorariComponent } from './avis-mettiorari/avis-mettiorari.component';
import { AuthenticationService } from './service/authentication.service';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';
const routes: Routes = [

  { path: 'user', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pagina-accesso', component: PaginaAccessoComponent},
  { path: 'prenotazione-form-list', component: PrenotazioneFormListComponent, canActivate: [AuthGuardComponent]},
  { path: 'prenotazione-form-vista', component: PrenotazioneFormVistaComponent},
  { path: 'analisi-sangue-list', component: AnalisiSangueListComponent},
  { path: 'avis-orari', component: AvisOrariComponent},
  { path: 'avis-mettiorari', component: AvisMettiorariComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
