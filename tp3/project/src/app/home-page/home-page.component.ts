import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  voyages: any[] = []; 

  currentPage: number = 0;
  itemsPerPage: number = 20;
  totalPages: number = 0;

  showDialog: boolean = false;
  selectedID: string = '';

  constructor(
    private router: Router,
    private voyageService: VoyageService 
  ) { }

  ngOnInit(): void {
    this.router.navigate(['/home']); 
    this.loadVoyages(); 
  }

  loadVoyages(): void {
    this.voyages = this.voyageService.getVoyages();
    this.totalPages = Math.ceil(this.voyages.length / this.itemsPerPage);
  }

  getPaginatedVoyages(): any[] {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.voyages.slice(startIndex, endIndex);
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }

  onDestinationClick(id: string): void {
    this.selectedID = id;
    this.showDialog = true;
  }

  onNavigation(): void {
    this.router.navigate(['/detail', this.selectedID]);
    this.showDialog = false;
  }

  onDialogClose(): void {
    this.showDialog = false;
  }

  onDeleteClick(id: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce voyage ?')) {
      this.voyageService.deleteVoyage(id); 
      this.loadVoyages(); 
    }
  }

  getVoyageById(id: string): any {
    return this.voyageService.getVoyageById(id);
  }
}