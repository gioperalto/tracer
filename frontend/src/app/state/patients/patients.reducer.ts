import { createReducer, on } from '@ngrx/store';
import { Patient } from 'src/app/models/patients.model';

import { addPatient, getPatient } from './patients.actions';

export const initialState: Patient = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  password: '',
  created: new Date()
};

export const patientsReducer = createReducer(
  initialState,
  on(getPatient, (state, { patient }) => patient),
  on(addPatient, (state, { patient }) => patient),
);