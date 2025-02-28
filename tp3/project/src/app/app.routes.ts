import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratePageComponent } from './generate-page/generate-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'detail/:id', component: AboutPageComponent },
  { path: 'generation-voyages', component: GeneratePageComponent },
  { path: '404',component: NotFoundPageComponent,},
  { path: '**', component: NotFoundPageComponent }
  // autres routes ici...
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
