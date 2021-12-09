import { createFeatureSelector } from '@ngrx/store';
import { Exposure } from 'src/app/models/exposures.model';
 
export const selectExposures = createFeatureSelector<Exposure[]>('exposures');
export const selectIncidents = createFeatureSelector<Exposure[]>('incidents');