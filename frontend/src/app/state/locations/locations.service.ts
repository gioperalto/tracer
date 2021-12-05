import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { apiUrl } from '../../../environments/environment';
import { Location } from '../../models/locations.model';
 
@Injectable({ providedIn: 'root' })
export class LocationsService {
  constructor(private http: HttpClient) {}
 
  getLocations(): Observable<Array<Location>> {
    return this.http
      .get<{ items: Location[] }>(
        `${apiUrl}/api/locations`
      )
      .pipe(map((locations) => locations.items || []));
  }
}