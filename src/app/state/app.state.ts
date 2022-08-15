import { AccomodationState } from "./accomodations/accomodation.reducer";
import { LocationState } from "./location/location.reducer";
import { LocationsState } from "./locations/locations.reducer";

export interface AppState {
    accomodations: AccomodationState,
    locations: LocationsState,
    location: LocationState
}