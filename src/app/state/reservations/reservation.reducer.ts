import { createReducer, on } from '@ngrx/store';
import { CustomErrorResponse } from 'src/app/models/custom-error-response.model';
import { ReservationModel } from 'src/app/models/reservation.model';
import * as ReservationActions from './reservations.actions';

export interface ReservationState {
	reservations: ReservationModel[];
	reservation?: ReservationModel;
	error?: CustomErrorResponse;
	loading: boolean;
}

export interface DeleteReservationState {
	error?: CustomErrorResponse;
	loading: boolean;
}

export interface PutReservationState {
	reservation?: ReservationModel;
	error?: CustomErrorResponse;
	loading: boolean;
}

const initialReservationState: ReservationState = {
	reservations: [],
	loading: true
};

const initialDeleteReservationState: DeleteReservationState = {
	loading: true
};

const initialPutReservationState: PutReservationState = {
	loading: true
};

export const reservationReducer = createReducer(
	initialReservationState,
	on(ReservationActions.GetReservations, (state) => ({ ...state, loading: true })),
	on(ReservationActions.GetReservationsSuccess, (state, { payload }) => ({ ...state, reservations: payload, loading: false })),
	on(ReservationActions.GetReservationsFail, (state, { payload }) => ({ ...state, error: payload, loading: false })),
	on(ReservationActions.PostReservation, (state) => ({ ...state, loading: true })),
	on(ReservationActions.PostReservationSuccess, (state) => ({ ...state, loading: false })),
	on(ReservationActions.PostReservationFail, (state, { payload }) => ({ ...state, error: payload, loading: false })),
	on(ReservationActions.GetReservation, (state) => ({ ...state, loading: true })),
	on(ReservationActions.GetReservationSuccess, (state, { payload }) => ({ ...state, reservation: payload, loading: false })),
	on(ReservationActions.GetReservationFail, (state, { payload }) => ({ ...state, error: payload, loading: false }))
);

export const deleteReservationReducer = createReducer(
    initialDeleteReservationState,
    on(ReservationActions.DeleteReservation, (state) => ({...state, loading: true})),
    on(ReservationActions.DeleteReservationSuccess, (state) => ({...state, loading: false})),
    on(ReservationActions.DeleteReservationFail, (state, {payload}) => ({...state, error: payload, loading: false}))
)

export const putReservationReducer = createReducer(
    initialPutReservationState,
    on(ReservationActions.PutReservation, (state) => ({...state, loading: true})),
    on(ReservationActions.PutReservationSuccess, (state) => ({...state, loading: false})),
    on(ReservationActions.PutReservationFail, (state, {payload}) => ({...state, error: payload, loading: false})),
    on(ReservationActions.ConfirmReservation, (state) => ({...state, loading: true})),
    on(ReservationActions.ConfirmReservationSuccess, (state, {payload}) => ({...state, reservation: payload, loading: false})),
    on(ReservationActions.ConfirmReservationFail, (state, {payload}) => ({...state, error: payload, loading: false}))
)