import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { TitrefooteurComponent } from './titrefooteur/titrefooteur.component';

@Component({
  selector: 'app-footeur',
  standalone: true,
  imports: [NavComponent,TitrefooteurComponent],
  templateUrl: './footeur.component.html',
  styleUrl: './footeur.component.scss'
})
export class FooteurComponent {

}
