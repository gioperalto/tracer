import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Exposure } from 'src/app/models/exposures.model';
import { addExposure } from 'src/app/state/exposures/exposures.actions';
import { ExposuresService } from 'src/app/state/exposures/exposures.service';

@Component({
  selector: 'create-exposure',
  templateUrl: './exposure.component.html',
  styleUrls: ['./exposure.component.css']
})
export class CreateExposureComponent {
  occurrence = new Date();

  constructor(
    private router: Router, 
    private store: Store,
    private exposuresService: ExposuresService,
  ) {}

  public submit() {
    const exp: Exposure = {
      occurrence: new Date(this.occurrence.toISOString()),
      locations: []
    };
    this.exposuresService.addExposure(exp)
    .subscribe((exposure) => this.store.dispatch(addExposure({ exposure })));
    this.router.navigate(['/'], { queryParams: { tabIndex: 2 } });
  }
}