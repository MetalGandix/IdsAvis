import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { AvisComponent } from './avis-login/avis.component';
import { DottoreComponent } from './dottore-login/dottore.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { DonareComponent } from './donare/donare.component';
import { FooterComponent } from './footer/footer.component';
import { AvisPageComponent } from './avis-page/avis-page.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './user-service.service';
import { NgxLoadingModule } from 'ngx-loading';
import { ChiPuoDonareComponent } from './chi-puo-donare/chi-puo-donare.component';
import { ComeDonareComponent } from './come-donare/come-donare.component';
import { EmbedVideo } from 'ngx-embed-video';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { PrenotazioneFormListComponent } from './prenotazione-form-list/prenotazione-form-list.component';
import { PrenotazioneFormVistaComponent } from './prenotazione-form-vista/prenotazione-form-vista.component';
import { PrenotazioneFormService } from './prenotazione-form.service';
import { PaginaDottoreComponent } from './pagina-dottore/pagina-dottore.component';
import { AnalisiSangueListComponent } from './analisi-sangue-list/analisi-sangue-list.component';
import { AvisOrariComponent } from './avis-orari/avis-orari.component';
import { AvisMettiorariComponent } from './avis-mettiorari/avis-mettiorari.component';
import { AvisService } from './avis.service';
import { BasicAuthHtppInterceptorService } from './service/basic-auth-httpp-interceptor.service';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';
import { AuthenticationService } from './service/authentication.service';
import { RoleGuardComponent } from './role-guard/role-guard.component';
import { ControlloAnalisiComponent } from './controllo-analisi/controllo-analisi.component';
import { StatisticheComponent } from './statistiche/statistiche.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    LoginComponent,
    AvisComponent,
    DottoreComponent,
    DonareComponent,
    FooterComponent,
    AvisPageComponent,
    UserFormComponent,
    ChiPuoDonareComponent,
    ComeDonareComponent,
    PrenotazioneFormListComponent,
    PrenotazioneFormVistaComponent,
    PaginaDottoreComponent,
    AnalisiSangueListComponent,
    AvisOrariComponent,
    AvisMettiorariComponent,
    RoleGuardComponent,
    ControlloAnalisiComponent,
    StatisticheComponent
  ],
  
  imports: [
    HttpClientModule, 
    EmbedVideo.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    NgxLoadingModule.forRoot({}),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'avis', component: AvisComponent },
      { path: 'dottore-login', component: DottoreComponent },
      { path: 'donare', component: DonareComponent},
      { path: 'user-form', component: UserFormComponent},
      { path: 'chi-puo-donare', component: ChiPuoDonareComponent},
      { path: 'come-donare', component: ComeDonareComponent},
      { path: 'dottore', component: PaginaDottoreComponent},
      { path: 'analisi-sangue-list', component: AnalisiSangueListComponent},
      { path: 'avis-page', component: AvisPageComponent},
      { path: 'controllo-analisi', component:ControlloAnalisiComponent},
      { path: 'statistiche', component:StatisticheComponent}


    ]),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot()

  ],
  providers: [UserService,PrenotazioneFormService,AvisService,AuthenticationService, AuthGuardComponent, RoleGuardComponent,
    {
      provide: HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule 
{ 
  youtubeUrl = 'https://www.youtube.com/embed/ZWL3UZAKnMM?feature=oembed'; 'https://www.youtube.com/embed/OcGFBGY9_NA?feature=oembed'
  youtubeId = 'iHhcHTlGtRs';
}
