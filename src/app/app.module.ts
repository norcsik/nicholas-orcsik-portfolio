import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './components/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { WorksPageComponent } from './components/works-page/works-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutPageComponent,
    MainPageComponent,
    WorksPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
