import { Location } from "./locations.model";

export interface Exposure {
	occurrence: Date;
	locations: Location[]
}