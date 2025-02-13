import { Component } from '@angular/core';

@Component({
  selector: 'app-titrefooteur',
  standalone: true,
  imports: [],
  templateUrl: './titrefooteur.component.html',
  styleUrl: './titrefooteur.component.scss'
})
export class TitrefooteurComponent {
  title: string = 'Trafalgar';
  description: string = 'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone';
  text: string = '©Trafalgar PTY LTD 2020. All rights reserved';
  imageFooteur: string = "assets/images/footeur/footeur.PNG";
}
