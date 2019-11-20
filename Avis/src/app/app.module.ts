import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { PrenotazioneComponent } from './prenotazione/prenotazione.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AvisComponent } from './avis/avis.component';
import { DottoreComponent } from './dottore/dottore.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RegisterComponent } from './register/register.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FormDonatoreComponent } from './form-donatore/form-donatore.component';
import { InfoDonazioneComponent } from './info-donazione/info-donazione.component';
import { SangueComponent } from './sangue/sangue.component';
import { DonareComponent } from './donare/donare.component';
import { SedeComponent } from './sede/sede.component';
import { FooterComponent } from './footer/footer.component';
import { AvisPageComponent } from './avis-page/avis-page.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrenotazioneComponent,
    ToolbarComponent,
    LoginComponent,
    AdminComponent,
    AvisComponent,
    DottoreComponent,
    RegisterComponent,
    FormDonatoreComponent,
    InfoDonazioneComponent,
    SangueComponent,
    DonareComponent,
    SedeComponent,
    FooterComponent,
    AvisPageComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'prenotazione', component: PrenotazioneComponent },
      { path: 'avis', component: AvisComponent },
      { path: 'login', component: LoginComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'dottore', component: DottoreComponent },
      { path: 'register', component: RegisterComponent},
      { path: 'form-donatore', component: FormDonatoreComponent},
      { path: 'info-donazione', component: InfoDonazioneComponent},
      { path: 'sangue', component: SangueComponent},
      { path: 'donare', component: DonareComponent},
      { path: 'sede', component: SedeComponent},
      { path: 'register', component: RegisterComponent}
    ]),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
