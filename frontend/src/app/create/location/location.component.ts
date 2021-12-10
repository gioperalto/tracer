import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Location } from 'src/app/models/locations.model';
import { addLocation } from 'src/app/state/locations/locations.actions';
import { LocationsService } from 'src/app/state/locations/locations.service';

@Component({
  selector: 'create-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class CreateLocationComponent {
  name = '';
  latitude = 0.0;
  longitude = 0.0;
  visited = new Date();
  coords: any;

  constructor(
    private router: Router, 
    private store: Store,
    private locationsService: LocationsService,
  ) {
    this.coords = {};
  }

  async findCoordinates(event: any) {
    event.preventDefault();
    this.locationsService.findCoordinates(this.name)
    .subscribe((coords) => {
      this.coords = coords;
      const location = this.coords.results[0].geometry.location;
      this.latitude = location.lat;
      this.longitude = location.lng;
    });
  }

  public submit() {
    const loc: Location = {
      name: this.name,
      latitude: this.latitude,
      longitude: this.longitude,
      visited: new Date(this.visited.toISOString())
    };
    this.locationsService.addLocation(loc)
    .subscribe((location) => this.store.dispatch(addLocation({ location })));
    this.router.navigate(['/'], { queryParams: { tabIndex: 1 } });
  }
}