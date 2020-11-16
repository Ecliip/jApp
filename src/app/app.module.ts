import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './cards/card/card.component';
import { CouchServicesComponent } from './couch-services/couch-services.component';
import { FindYourJogByCardComponent } from './find-your-jobBy-cards/find-your-jog-by-card/find-your-jog-by-card.component';
import { FooterComponent } from './footer/footer.component';
import { CouchServiceComponent } from './couch-services/couch-service/couch-service.component';
import {RouterModule} from '@angular/router';

const routes = [
  {path: '', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    CardsComponent,
    CardComponent,
    CouchServicesComponent,
    FindYourJogByCardComponent,
    FooterComponent,
    CouchServiceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
