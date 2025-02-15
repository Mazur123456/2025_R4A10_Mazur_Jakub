import { Component,Input, EventEmitter, Output  } from '@angular/core';
import { allReviews } from '../info/allReviews';
import { Review } from '../info/review';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  allReviews: Review[] = allReviews;
  
  @Output() nextReview = new EventEmitter<number>();

  prevSlide() {
    this.nextReview.emit(-1);  }

  nextSlide() {
    this.nextReview.emit(+1);
  }
}
