import { createAction, props } from '@ngrx/store';
import { Exposure } from 'src/app/models/exposures.model';
import { Location } from 'src/app/models/locations.model';
 
export const addExposure = createAction(
  '[Exposure List] Add Exposure',
  props<{ exposure: Exposure }>()
);
 
export const getExposures = createAction(
  '[Exposure List/API] Get Exposures Success',
  props<{ exposures: ReadonlyArray<Exposure> }>()
);

export const getExposees = createAction(
  '[Exposee List/API] Get Exposee Success',
  props<{ exposees: ReadonlyArray<Location> }>()
);