import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-destinations-list',
  templateUrl: './destinations-list.component.html',
  styleUrls: ['./destinations-list.component.css']
})
export class DestinationsListComponent {
  @Input() destinations: string[] = [];
  @Input() descriptions: string[] = [];
  @Input() prix: number[] = [];
}
