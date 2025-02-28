import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  voyage: any;
  voyageId: string | null = null; 

  constructor(
    private route: ActivatedRoute, 
    private voyageService: VoyageService, 
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.voyageId = this.route.snapshot.paramMap.get('id');

    
    if (this.voyageId) {
      this.voyage = this.voyageService.getVoyageById(this.voyageId);
      if (!this.voyage) {
        
        this.navigateToHome();
      }
    }
  }

  deleteVoyage(): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce voyage ?')) {
      if (this.voyageId) {
        this.voyageService.deleteVoyage(this.voyageId); 
        this.navigateToHome(); 
      }
    }
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
}