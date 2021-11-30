import { createReducer, on } from '@ngrx/store';

import { retrievedBookList } from './books.actions';
import { Book } from '../../models/books.model';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books)
);