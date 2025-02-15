// src/app/services/review.service.ts
import { Injectable } from '@angular/core';
import { Review } from './info/review';
import { allReviews } from './info/allReviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private reviews: Review[] = allReviews;

  constructor() {}

  getReviews(): Review[] {
    return this.reviews;
  }
}
