import { Component } from '@angular/core';
import { LogoHeaderComponent } from './logo-header/logo-header.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoHeaderComponent,NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
