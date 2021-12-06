import { createFeatureSelector } from '@ngrx/store';
import { Patient } from '../../models/patients.model';
 
export const selectPatient = createFeatureSelector<Patient>('patient');