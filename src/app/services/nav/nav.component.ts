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
    { logo: 'assets/images/block2/logo1B2.PNG', title: 'Search doctor', description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals' },
    { logo: 'assets/images/block2/logo2B2.PNG', title: 'Online pharmacy', description: 'Buy  your medicines with our mobile application with a simple delivery system' },
    { logo: 'assets/images/block2/logo3B2.PNG', title: 'Consultation', description: 'Free consultation with our trusted doctors and get the best recomendations' },
    { logo: 'assets/images/block2/logo4B2.PNG', title: 'Details info', description: 'Free consultation with our trusted doctors and get the best recomendations' },
    { logo: 'assets/images/block2/logo5B2.PNG', title: 'Emergency care', description: 'You can get 24/7 urgent care for yourself or your children and your lovely family' },
    { logo: 'assets/images/block2/logo6B2.PNG', title: 'Tracking', description: 'Track and save your medical history and health data ' }
  ];
}
