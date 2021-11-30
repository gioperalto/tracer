import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Location } from '../../models/locations.model';
 
export const selectLocations = createFeatureSelector<ReadonlyArray<Location>>('locations');
 
export const selectBookCollection = createSelector(
  selectLocations,
  (locations) => {
    return locations;
  }
);