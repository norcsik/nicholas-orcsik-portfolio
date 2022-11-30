import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from '../about-page/about-page.component';
import { WorkDetailComponent } from '../work-detail/work-detail.component';
import { WorksPageComponent } from '../works-page/works-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/about",
    pathMatch: "full",
  },
  { 
    path: "about", 
    component: AboutPageComponent
  },
  { 
    path: "works", 
    component: WorksPageComponent
  },
  { 
    path: "works/:id", 
    component: WorkDetailComponent
  }
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
