import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/books.model';
 
export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ books: ReadonlyArray<Book> }>()
);