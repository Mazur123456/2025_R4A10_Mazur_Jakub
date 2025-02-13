import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HealthCareComponent } from './health-care/health-care.component';
import { ServicesComponent } from './services/services.component';
import { FooteurComponent } from './footeur/footeur.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HealthCareComponent,ServicesComponent,FooteurComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mazur-projet';
}
