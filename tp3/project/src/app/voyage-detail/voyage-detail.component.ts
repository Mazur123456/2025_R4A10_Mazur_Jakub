import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-voyage-detail',
  templateUrl: './voyage-detail.component.html',
  styleUrls: ['./voyage-detail.component.css']
})
export class VoyageDetailComponent implements OnInit {
  voyage: any;

  constructor(private route: ActivatedRoute, 
              private voyageService: VoyageService, 
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.voyage = this.voyageService.getVoyages().find(v => v.id === id);
  }

  deleteVoyage(): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce voyage ?')) {
      this.voyageService.deleteVoyage(this.voyage.id);
      this.router.navigate(['/home']);
    }
  }
}
