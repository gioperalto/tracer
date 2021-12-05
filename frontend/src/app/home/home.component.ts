import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationsService } from '../state/locations/locations.service';
import { getLocations } from '../state/locations/locations.actions';
import { selectLocations } from '../state/locations/locations.selectors';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sub: any;
  tabIndex = 0;
  locations$ = this.store.select(selectLocations);

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private locationsService: LocationsService,
    private store: Store
  ) {}

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.tabIndex = +params['tabIndex'] || 0;
      });
    this.locationsService
      .getLocations()
      .subscribe((locations) => this.store.dispatch(getLocations({ locations })));
  }

  goLogin(): void {
    this.router.navigate(['login']);
  }
}