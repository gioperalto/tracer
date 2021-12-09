import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
 
import { of, retry, catchError, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { apiUrl } from '../../../environments/environment';
import { Exposure } from '../../models/exposures.model';

@Injectable({ providedIn: 'root' })
export class ExposuresService {
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
 
  addExposure(exposure: Exposure): Observable<Exposure> {
    console.log(exposure);
    return this.http
      .post<Exposure>(`${apiUrl}/api/exposures`, exposure)
      .pipe(
        catchError( this.handleError )
      );
  }

  getExposures(): Observable<Array<Exposure>> {
    return this.http
      .get<{ items: Exposure[] }>(
        `${apiUrl}/api/exposures`
      )
      .pipe(map((exposures) => exposures.items || []));
  }

  getIncidents(): Observable<Array<Exposure>> {
    return this.http
      .get<{ items: Exposure[] }>(
        `${apiUrl}/api/exposures/incidents`
      )
      .pipe(map((incidents) => incidents.items || []));
  }
}