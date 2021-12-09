import { createReducer, on } from '@ngrx/store';

import { addExposure, getIncidents, getExposures } from './exposures.actions';
import { Exposure } from 'src/app/models/exposures.model';

export const initialState: ReadonlyArray<Exposure> = [];

export const exposuresReducer = createReducer(
  initialState,
  on(getExposures, (state, { exposures }) => exposures),
  on(addExposure, (state, { exposure }) => [...state, exposure]),
);

export const incidentsReducer = createReducer(
  initialState,
  on(getIncidents, (state, { incidents }) => incidents)
);