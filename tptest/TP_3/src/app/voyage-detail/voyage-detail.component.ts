import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoyageService } from '../voyage.service';
import { Voyage } from '../voyage.model';

@Component({
  selector: 'app-voyage-detail',
  templateUrl: './voyage-detail.component.html',
  styleUrls: ['./voyage-detail.component.css']
})
export class VoyageDetailComponent implements OnInit {
  voyage: Voyage | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private voyageService: VoyageService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.voyage = this.voyageService.getVoyageById(id);
    }
  }

  deleteVoyage(): void {
    if (this.voyage && confirm('Are you sure you want to delete this voyage?')) {
      this.voyageService.deleteVoyage(this.voyage.id);
      this.router.navigate(['/home']);
    }
  }
}