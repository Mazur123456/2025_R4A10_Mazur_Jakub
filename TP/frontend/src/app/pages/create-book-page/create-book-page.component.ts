import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BookApiService } from '../../services/book-apiservices';
import { Book } from '../../models/book';
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
    private bookApiService: BookApiService
  ) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(35)]],
      author: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]],
      coverUrl: ['https://placehold.co/150x200']
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const isConfirmed = confirm('Voulez-vous vraiment créer ce livre ?');
      if (isConfirmed) {
        const newBook: Book = {
          id: 0,
          title: this.bookForm.value.title,
          author: this.bookForm.value.author,
          description: this.bookForm.value.description,
          coverUrl: this.bookForm.value.coverUrl
        };

        console.log('Données du formulaire :', newBook); // Debug

        this.bookApiService.addBook(newBook).subscribe(
          (createdBook: Book) => {
            console.log('Livre créé avec succès :', createdBook); // Debug
            this.errorMessage = null;
            this.router.navigate(['']);
          },
          (error) => {
            console.error('Erreur lors de la création du livre :', error); // Debug
            this.errorMessage = 'Une erreur est survenue lors de la création du livre.';
          }
        );
      }
    } else {
      console.log('Formulaire invalide');
      this.errorMessage = 'Veuillez remplir correctement tous les champs.';
    }
  }
}