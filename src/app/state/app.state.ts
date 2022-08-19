import { AccomodationState } from './accomodations/accomodation.reducer';
import { LocationState } from './location/location.reducer';
import { LocationsState } from './locations/locations.reducer';
import { DeleteReservationState, PutReservationState, ReservationState } from './reservations/reservation.reducer';

export interface AppState {
	accomodations: AccomodationState;
	locations: LocationsState;
	location: LocationState;
	reservations: ReservationState;
	deleteReservations: DeleteReservationState;
    putReservations: PutReservationState;
}
