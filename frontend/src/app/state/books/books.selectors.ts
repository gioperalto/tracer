import { createFeatureSelector } from '@ngrx/store';
import { Book } from 'src/app/models/books.model';
 
export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');