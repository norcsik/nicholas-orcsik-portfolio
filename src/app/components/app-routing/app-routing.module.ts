import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from '../about-page/about-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/about",
    pathMatch: "full",
  },
  { 
    path: "about", 
    component: AboutPageComponent
  }
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
