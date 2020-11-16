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

const routes = [
  {path: '', component: MainScreenComponent}
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
