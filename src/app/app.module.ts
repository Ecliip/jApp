import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CouchServicesComponent } from './couch-services/couch-services.component';
import { FooterComponent } from './footer/footer.component';
import { CouchServiceComponent } from './couch-services/couch-service/couch-service.component';
import {RouterModule} from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { EmployersCardsComponent } from './employers-cards/employers-cards.component';
import { EmployersCardComponent } from './employers-cards/employers-card/employers-card.component';
import { FindJobByFiltersComponent } from './find-job-by-filters/find-job-by-filters.component';
import { FilterComponent } from './find-job-by-filters/filter/filter.component';
import { OffersMainComponent } from './offers-main/offers-main.component';
import { LearningMainComponent } from './learning-main/learning-main.component';
import { OrientacionMainComponent } from './orientacion-main/orientacion-main.component';
import { CompaniesMainComponent } from './companies-main/companies-main.component';
import { CandidateMainComponent } from './candidate-main/candidate-main.component';

const routes = [
  {path: '', component: MainScreenComponent},
  {path: 'ofertas-trabajo', component: OffersMainComponent},
  {path: 'ofertas-trabajo/empleo-directivos', component: OffersMainComponent},
  {path: 'ofertas-trabajo/empleo-directivos', component: OffersMainComponent},
  {path: 'formacion', component: LearningMainComponent},
  {path: 'orientacion-laboral', component: OrientacionMainComponent},
  {path: 'empresas', component: CompaniesMainComponent},
  {path: 'candidatos', component: CandidateMainComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    CouchServicesComponent,
    FooterComponent,
    CouchServiceComponent,
    MainScreenComponent,
    EmployersCardsComponent,
    EmployersCardComponent,
    FindJobByFiltersComponent,
    FilterComponent,
    OffersMainComponent,
    LearningMainComponent,
    OrientacionMainComponent,
    CompaniesMainComponent,
    CandidateMainComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
