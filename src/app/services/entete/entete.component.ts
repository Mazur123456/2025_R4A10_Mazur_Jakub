import { Component } from '@angular/core';

@Component({
  selector: 'app-entete',
  standalone: true,
  imports: [],
  templateUrl: './entete.component.html',
  styleUrl: './entete.component.scss'
})
export class EnteteComponent {
  titre: string = 'Our services';
  description: string = 'We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health';
}
