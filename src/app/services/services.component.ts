import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { EnteteComponent } from './entete/entete.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavComponent,EnteteComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
