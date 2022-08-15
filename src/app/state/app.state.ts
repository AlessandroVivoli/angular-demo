import { AccomodationState } from "./accomodations/accomodation.reducer";
import { LocationState } from "./locations/location.reducer";

export interface AppState {
    accomodations: AccomodationState,
    locations: LocationState
}