import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { EnteteComponent } from './entete/entete.component';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavComponent,EnteteComponent,ButtonComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
