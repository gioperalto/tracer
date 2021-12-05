import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { LocationsService } from '../state/locations/locations.service';
import { getLocations } from '../state/locations/locations.actions';
import { selectLocations } from '../state/locations/locations.selectors';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  locations$ = this.store.select(selectLocations);

  constructor(
    public auth: AuthService,
    private router: Router,
    private locationsService: LocationsService,
    private store: Store
  ) {}

  ngOnInit() {
    this.locationsService
      .getLocations()
      .subscribe((locations) => this.store.dispatch(getLocations({ locations })));
  }

  goLogin(): void {
    this.router.navigate(['login']);
  }
}