import { createAction, props } from '@ngrx/store';
import { Location } from '../../models/locations.model';
 
export const addLocation = createAction(
  '[Location List] Add Location',
  props<{ location: Location }>()
);
 
export const removeLocation = createAction(
  '[Location List] Remove Location',
  props<{ locationId: string }>()
);
 
export const getLocations = createAction(
  '[Location List/API] Get Locations Success',
  props<{ locations: ReadonlyArray<Location> }>()
);