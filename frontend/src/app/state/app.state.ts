import { Book } from '../models/books.model';
import { Location } from '../models/locations.model';

export interface AppState {
	books: ReadonlyArray<Book>;
  locations: ReadonlyArray<Location>;
}