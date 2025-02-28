import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private destinations: string[] = []; // Liste des destinations
  private descriptions: string[] = []; // Liste des descriptions
  private prix: number[] = []; // Liste des prix

  private voyages: any[] = [];

  // Ajouter un voyage
  addVoyage(voyage: any): void {
    this.voyages.push(voyage);
  }

  // Récupérer un voyage par son ID
  getVoyageById(id: string): any {
    return this.voyages.find(voyage => voyage.id === id);
  }

  // Supprimer un voyage par son ID
  deleteVoyage(id: string): void {
    this.voyages = this.voyages.filter(voyage => voyage.id !== id);
  }

  // Récupérer tous les voyages
  getVoyages(): any[] {
    return this.voyages;
  }

  // Récupérer toutes les destinations
  getDestinations(): string[] {
    return this.destinations;
  }

  // Récupérer toutes les descriptions
  getDescriptions(): string[] {
    return this.descriptions;
  }

  // Récupérer tous les prix
  getPrix(): number[] {
    return this.prix;
  }
  // Générer un ID unique
  generateId(): string {
    return Math.random().toString(36).substr(2, 9); // Génère un ID aléatoire
  }
}