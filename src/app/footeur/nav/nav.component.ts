import { Component } from '@angular/core';
import { allNavs } from './navsfooteur';
import { InfoNavs } from './navsinfofooteur';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  allNavs: InfoNavs[] = allNavs;
}
