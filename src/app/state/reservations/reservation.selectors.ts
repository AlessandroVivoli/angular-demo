import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { DeleteReservationState, PutReservationState, ReservationState } from './reservation.reducer';

export const reservationsSelect = (state: AppState) => state.reservations;
export const selectReservations = createSelector(reservationsSelect, (state: ReservationState) => state.reservations);
export const selectReservationsLoading = createSelector(reservationsSelect, (state: ReservationState) => state.loading);
export const selectReservationsError = createSelector(reservationsSelect, (state: ReservationState) => state.error);
export const selectReservation = createSelector(reservationsSelect, (state: ReservationState) => state.reservation);

export const deleteReservationSelect = (state: AppState) => state.deleteReservations;
export const selectDeleteReservationLoading = createSelector(deleteReservationSelect, (state: DeleteReservationState) => state.loading);
export const selectDeleteReservationError = createSelector(deleteReservationSelect, (state: DeleteReservationState) => state.error);

export const putReservationSelect = (state: AppState) => state.putReservations;
export const selectPutReservation = createSelector(putReservationSelect, (state: PutReservationState) => state.reservation);
export const selectPutReservationLoading = createSelector(putReservationSelect, (state: PutReservationState) => state.loading);
export const selectPutReservationError = createSelector(putReservationSelect, (state: PutReservationState) => state.error);
