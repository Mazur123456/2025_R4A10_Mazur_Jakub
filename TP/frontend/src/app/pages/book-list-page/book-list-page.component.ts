import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BooksInMemoryService } from '../../services/book-inmemory.service';
import { RouterLink } from '@angular/router';
import { BookApiService } from '../../services/book-apiservices';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-book-list-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-list-page.component.html',
  styleUrl: './book-list-page.component.css',
})
export class BookListPageComponent implements OnInit {
  books: Book[] = [];  // Liste des livres à afficher

  constructor(private bookApiService: BookApiService) {}

  ngOnInit(): void {
    this.loadBooks();  // Charger les livres au démarrage
  }

  // Charger la liste des livres
  loadBooks(): void {
    this.bookApiService.getBooks().subscribe(
      (data: Book[]) => {
        this.books = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des livres', error);
      }
    );
  }

  // Supprimer un livre
  deleteBook(id: number): void {
    this.bookApiService.deleteBook(id).subscribe(
      () => {
        // Supprimer le livre de la liste côté frontend
        this.books = this.books.filter(book => book.id !== id);
      },
      (error) => {
        console.error('Erreur lors de la suppression du livre', error);
      }
    );
  }
}


