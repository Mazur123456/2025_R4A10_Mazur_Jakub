import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Importation des données de `data.ts`
import { DESTINATIONS, DESCRIPTIONS, PRIX } from '../../data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  showDialog: boolean = false;
  selectedID: number = 0;

  destinations: string[] = DESTINATIONS;
  descriptions: string[] = DESCRIPTIONS;
  prix: number[] = PRIX;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onDestinationClick(index: number): void {
    this.selectedID = index;
    this.showDialog = true;
  }

  onNavigation(): void {
    this.router.navigate(['/detail', this.selectedID]);
    this.showDialog = false;
  }

  onDialogClose(): void {
    this.showDialog = false;
  }
}
