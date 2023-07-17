import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './components/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { WorksPageComponent } from './components/works-page/works-page.component';
import { WorkCardComponent } from './components/work-card/work-card.component';
import { WorkListComponent } from './components/work-list/work-list.component';
import { WorkDetailComponent } from './components/work-detail/work-detail.component';

import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { ContactPageComponent } from './components/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutPageComponent,
    MainPageComponent,
    WorksPageComponent,
    WorkCardComponent,
    WorkListComponent,
    WorkDetailComponent,
    ContactPageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 500
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
