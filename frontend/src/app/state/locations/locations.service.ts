import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
 
import { of, retry, catchError, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { apiUrl } from '../../../environments/environment';
import { Location } from '../../models/locations.model';

@Injectable({ providedIn: 'root' })
export class LocationsService {
  constructor(private http: HttpClient, private router: Router) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
 
  addLocation(location: Location): Observable<Location> {
    console.log(location);
    return this.http
      .post<Location>(`${apiUrl}/api/locations`, location)
      .pipe(
        catchError( this.handleError )
      );
  }

  getLocations(): Observable<Array<Location>> {
    return this.http
      .get<{ items: Location[] }>(
        `${apiUrl}/api/locations`
      )
      .pipe(map((locations) => locations.items || []));
  }
}