import { createReducer, on } from '@ngrx/store';

import { getLocations } from './locations.actions';
import { Location } from '../../models/locations.model';

export const initialState: ReadonlyArray<Location> = [];

export const locationsReducer = createReducer(
  initialState,
  on(getLocations, (state, { locations }) => locations)
);