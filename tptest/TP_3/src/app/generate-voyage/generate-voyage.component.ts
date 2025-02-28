import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VoyageService } from '../voyage.service';
import { Voyage } from '../voyage.model';
import { DESTINATIONS, DESCRIPTIONS } from '../data';

@Component({
  selector: 'app-generate-voyage',
  templateUrl: './generate-voyage.component.html',
  styleUrls: ['./generate-voyage.component.css']
})
export class GenerateVoyageComponent {
  generatedVoyage: Voyage | null = null;

  constructor(private voyageService: VoyageService, private router: Router) {}

  generateVoyage(): void {
    const destination = DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)];
    const description = DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)];
    const prix = Math.floor(Math.random() * 1000) + 100;
    const id = Math.random().toString(36).substring(2);

    this.generatedVoyage = { id, destination, description, prix };
  }

  saveVoyage(): void {
    if (this.generatedVoyage) {
      this.voyageService.addVoyage(this.generatedVoyage);
      this.router.navigate(['/voyage', this.generatedVoyage.id]);
    }
  }
}