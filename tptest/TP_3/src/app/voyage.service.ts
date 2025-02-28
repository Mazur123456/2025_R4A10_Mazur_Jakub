import { Injectable } from '@angular/core';
import { Voyage } from './voyage.model';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private voyages: Voyage[] = [];

  constructor() {
    this.loadVoyages();
  }

  getVoyages(): Voyage[] {
    return this.voyages;
  }

  getVoyageById(id: string): Voyage | undefined {
    return this.voyages.find(voyage => voyage.id === id);
  }

  addVoyage(voyage: Voyage): void {
    this.voyages.push(voyage);
    this.saveVoyages();
  }

  deleteVoyage(id: string): void {
    this.voyages = this.voyages.filter(voyage => voyage.id !== id);
    this.saveVoyages();
  }

  private saveVoyages(): void {
    localStorage.setItem('voyages', JSON.stringify(this.voyages));
  }

  private loadVoyages(): void {
    const voyages = localStorage.getItem('voyages');
    this.voyages = voyages ? JSON.parse(voyages) : [];
  }
}