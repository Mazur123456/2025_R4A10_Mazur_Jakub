import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private destinations: string[] = []; 
  private descriptions: string[] = []; 
  private prix: number[] = []; 
  private voyages: any[] = [];

  addVoyage(voyage: any): void {
    this.voyages.push(voyage);
  }

  getVoyageById(id: string): any {
    return this.voyages.find(voyage => voyage.id === id);
  }

  deleteVoyage(id: string): void {
    this.voyages = this.voyages.filter(voyage => voyage.id !== id);
  }


  getVoyages(): any[] {
    return this.voyages;
  }

  getDestinations(): string[] {
    return this.destinations;
  }

  getDescriptions(): string[] {
    return this.descriptions;
  }

  getPrix(): number[] {
    return this.prix;
  }

  generateId(): string {
    return Math.random().toString(36).substr(2, 9); 
  }
}