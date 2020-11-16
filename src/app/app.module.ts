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
import { FindJobByCardComponent } from './find-jobBy-cards/find-job-by-card/find-job-by-card.component';

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
    FindJobByCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
