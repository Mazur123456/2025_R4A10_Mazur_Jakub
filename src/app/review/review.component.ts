import { Component, Input } from '@angular/core';
import { ReviewService } from './review.service';
import { Review } from './info/review';
import { allReviews } from './info/allReviews';
import { ButtonComponent } from './button/button.component';
import { CustomerComponent } from "./customer/customer.component";

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [ButtonComponent, CustomerComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  @Input() reviewId: number = 0;
  allReviews: Review[] = allReviews;

  onAvisChange(indexChange: number) {
    const newIndex = this.reviewId + indexChange;
    if (newIndex >= 0 && newIndex < this.allReviews.length) {
      this.reviewId = newIndex;
    } else if (newIndex < 0) {
      this.reviewId = this.allReviews.length - 1
    } else {
      this.reviewId = 0;
    }
  }
}
