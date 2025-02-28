import { Component, OnInit } from '@angular/core';
import { VoyageService } from '../voyage.service';
import { Voyage } from '../voyage.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  voyages: Voyage[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 20;

  constructor(private voyageService: VoyageService) {}

  ngOnInit(): void {
    this.voyages = this.voyageService.getVoyages();
  }

  get paginatedVoyages(): Voyage[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.voyages.slice(startIndex, startIndex + this.itemsPerPage);
  }

  deleteVoyage(id: string): void {
    if (confirm('Are you sure you want to delete this voyage?')) {
      this.voyageService.deleteVoyage(id);
      this.voyages = this.voyageService.getVoyages();
    }
  }
}