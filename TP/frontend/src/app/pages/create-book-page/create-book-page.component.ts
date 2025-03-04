import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BooksInMemoryService } from '../../services/book-inmemory.service';
@Component({
  selector: 'app-create-book-page',
  standalone: true, 
  imports: [ReactiveFormsModule, CommonModule, RouterModule], 
  templateUrl: './create-book-page.component.html',
  styleUrls: ['./create-book-page.component.css']
})
export class CreateBookPageComponent {
  bookForm: FormGroup;
  errorMessage: string | null = null; 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private booksService: BooksInMemoryService 
  ) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(35)]],
      author: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]]
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const isConfirmed = confirm('Voulez-vous vraiment créer ce livre ?');
      if (isConfirmed) {
        const newBook = {
          title: this.bookForm.value.title,
          author: this.bookForm.value.author,
          description: this.bookForm.value.description
        };

        const bookId = this.booksService.createBook(newBook);
        if (bookId === null) {
          this.errorMessage = 'Ce livre existe déjà.'; 
        } else {
          console.log('Livre créé avec l\'ID :', bookId);
          this.errorMessage = null; 
          this.router.navigate(['']);
        }
      }
    } else {
      console.log('Formulaire invalide');
    }
  }
}