import { Component } from '@angular/core';

@Component({
  selector: 'app-blockleft',
  standalone: true,
  imports: [],
  templateUrl: './blockleft.component.html',
  styleUrl: './blockleft.component.scss'
})
export class BlockleftComponent {
  title="Virtual healthcare for you";
  description="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone";
  buttonText="Consult today";
  
  onButtonClick() {
    alert('Bouton cliqué !');
  }
}
