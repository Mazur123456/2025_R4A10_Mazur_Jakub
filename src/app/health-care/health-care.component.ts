import { Component } from '@angular/core';
import { BlockleftComponent } from './blockleft/blockleft.component';
import { BlockrightComponent } from './blockright/blockright.component';

@Component({
  selector: 'app-health-care',
  standalone: true,
  imports: [BlockleftComponent,BlockrightComponent],
  templateUrl: './health-care.component.html',
  styleUrl: './health-care.component.scss'
})
export class HealthCareComponent {

}
