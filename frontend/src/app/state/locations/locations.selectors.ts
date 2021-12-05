import { createFeatureSelector } from '@ngrx/store';
import { Location } from '../../models/locations.model';
 
export const selectLocations = createFeatureSelector<Location[]>('locations');