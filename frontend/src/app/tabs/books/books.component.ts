import { Component, Input } from '@angular/core';
import { Book } from '../../models/books.model';
 
@Component({
  selector: 'tabs-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class TabsBooksComponent {
  @Input() books: ReadonlyArray<Book> | null = [];
}