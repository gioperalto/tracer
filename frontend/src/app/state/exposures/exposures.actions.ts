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

export const getIncidents = createAction(
  '[Incident List/API] Get Incident Success',
  props<{ incidents: ReadonlyArray<Exposure> }>()
);