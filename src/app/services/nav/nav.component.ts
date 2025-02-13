import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  blocks = [
    { logo: 'assets/logo1.png', title: 'Titre 1', description: 'Description 1' },
    { logo: 'assets/logo2.png', title: 'Titre 2', description: 'Description 2' },
    { logo: 'assets/logo3.png', title: 'Titre 3', description: 'Description 3' },
    { logo: 'assets/logo4.png', title: 'Titre 4', description: 'Description 4' },
    { logo: 'assets/logo5.png', title: 'Titre 5', description: 'Description 5' },
    { logo: 'assets/logo6.png', title: 'Titre 6', description: 'Description 6' }
  ];
}
