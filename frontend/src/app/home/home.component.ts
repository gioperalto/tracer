import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBooks } from '../state/books/books.selectors';
import { retrievedBookList } from '../state/books/books.actions';
import { GoogleBooksService } from '../state/books/books.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books$ = this.store.select(selectBooks);

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }
}