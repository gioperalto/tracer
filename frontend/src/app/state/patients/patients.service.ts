import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
 
import { of, retry, catchError, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patient } from 'src/app/models/patients.model';
import { apis } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PatientsService {
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
 
  addPatient(patient: Patient): Observable<Patient> {
    console.log(patient);
    return this.http
      .post<Patient>(`${apis.tracer.url}/api/patients`, patient)
      .pipe(
        
        catchError( this.handleError )
      );
  }

  getPatient(): Observable<Patient> {
    return this.http
      .get<Patient>(
        `${apis.tracer.url}/api/patients`
      );
  }
}