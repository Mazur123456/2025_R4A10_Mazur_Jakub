import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-header',
  standalone: true,
  imports: [],
  templateUrl: './logo-header.component.html',
  styleUrl: './logo-header.component.scss'
})
export class LogoHeaderComponent {
  imageHeader: string = "assets/images/header/logo1.PNG";
  title="Trafalgar";
}
