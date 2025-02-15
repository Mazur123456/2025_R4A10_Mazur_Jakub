import { Component, Input } from '@angular/core';
import { Review } from '../info/review';
import { allReviews } from '../info/allReviews';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {
  @Input({required : true}) reviewId!: number;

  allReviews: Review[] = allReviews;

  get currentReview(): Review {
    return this.allReviews[this.reviewId];
  }
}
