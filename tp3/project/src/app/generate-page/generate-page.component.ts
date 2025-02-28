import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoyageService } from '../voyage.service';
import { DESTINATIONS, DESCRIPTIONS, PRIX } from '../../data';

@Component({
  selector: 'app-generate-page',
  templateUrl: './generate-page.component.html',
  styleUrls: ['./generate-page.component.scss']
})
export class GeneratePageComponent implements OnInit {
  destination: string = '';
  description: string = '';
  prix: number = 0;

  showDialog: boolean = false;

  constructor(
    private voyageService: VoyageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.generateVoyage(); 
  }

  generateVoyage(): void {
    this.destination = DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)];
    this.description = DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)];
    this.prix = PRIX[Math.floor(Math.random() * PRIX.length)];
  }

  validerVoyage(): void {
    const newVoyage = {
      id: this.voyageService.generateId(), 
      destination: this.destination,
      description: this.description,
      prix: this.prix
    };

    this.voyageService.addVoyage(newVoyage);
    this.router.navigate(['/home']);
  }

  addVoyage(): void {
    const newVoyage = {
      id: this.voyageService.generateId(), 
      destination: this.destination,
      description: this.description,
      prix: this.prix
    };
  
    this.voyageService.addVoyage(newVoyage); 
    this.router.navigate(['/home']); 
  }

  onNavigation(): void {
    this.router.navigate(['/home']);
  }

  onDialogClose(): void {
    this.showDialog = false;
  }

  onDialogOpen(): void {
    this.showDialog = true;
  }

}