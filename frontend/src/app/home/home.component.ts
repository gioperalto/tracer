import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBooks } from '../state/books/books.selectors';
import { retrievedBookList } from '../state/books/books.actions';
import { GoogleBooksService } from '../state/books/books.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books$ = this.store.select(selectBooks);

  constructor(
    public auth: AuthService,
    private router: Router,
    private booksService: GoogleBooksService,
    private store: Store
  ) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }

  goLogin(): void {
    this.router.navigate(['login']);
  }
}