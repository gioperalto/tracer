import { Location } from '../models/locations.model';

export interface AppState {
  locations: ReadonlyArray<Location>;
}