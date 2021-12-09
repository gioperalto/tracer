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
import { ExposuresService } from '../state/exposures/exposures.service';
import { getExposures, getIncidents } from '../state/exposures/exposures.actions';
import { selectExposures, selectIncidents } from '../state/exposures/exposures.selectors';

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
  exposures$ = this.store.select(selectExposures);
  incidents$ = this.store.select(selectIncidents);

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private patientService: PatientsService,
    private locationsService: LocationsService,
    private exposuresService: ExposuresService,
    private store: Store
  ) {}

  ngOnInit() {
    if (this.auth.loggedIn) {
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
      this.exposuresService
        .getExposures()
        .subscribe((exposures) => this.store.dispatch(getExposures({ exposures })));
      this.exposuresService
        .getIncidents()
        .subscribe((incidents) => this.store.dispatch(getIncidents({ incidents })));
    }
  }

  goLogin(): void {
    this.router.navigate(['login']);
  }
}