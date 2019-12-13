import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PaginaAccessoComponent } from './pagina-accesso/pagina-accesso.component';
import { LoginComponent } from './login/login.component';
 
const routes: Routes = [
  { path: 'user', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pagina-accesso', component: PaginaAccessoComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
