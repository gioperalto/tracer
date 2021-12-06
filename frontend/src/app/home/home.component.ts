import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationsService } from '../state/locations/locations.service';
import { getLocations } from '../state/locations/locations.actions';
import { selectLocations } from '../state/locations/locations.selectors';
import { PatientsService } from '../state/patients/patients.service';
import { selectPatient } from '../state/patients/patients.selectors';
import { getPatient } from '../state/patients/patients.actions';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sub: any;
  tabIndex = 0;
  patient$ = this.store.select(selectPatient);
  locations$ = this.store.select(selectLocations);

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private patientService: PatientsService,
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
    this.patientService
      .getPatient()
      .subscribe((patient) => this.store.dispatch(getPatient({ patient })));
    this.locationsService
      .getLocations()
      .subscribe((locations) => this.store.dispatch(getLocations({ locations })));
  }

  goLogin(): void {
    this.router.navigate(['login']);
  }
}