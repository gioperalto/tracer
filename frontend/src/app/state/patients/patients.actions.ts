import { createAction, props } from '@ngrx/store';
import { Patient } from '../../models/patients.model';
 
export const addPatient = createAction(
  '[Patient List] Add Patient',
  props<{ patient: Patient }>()
);
 
export const getPatient = createAction(
  '[Patient List/API] Get Patient Success',
  props<{ patient: Patient }>()
);