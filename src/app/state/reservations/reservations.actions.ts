import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { ReservationModel } from 'src/app/models/reservation.model';

export const GET_RESERVATIONS = '[Reservations] GET';
export const GET_RESERVATIONS_SUCCESS = '[Reservations] GET SUCCESS';
export const GET_RESERVATIONS_FAIL = '[Reservations] GET FAIL';

export const POST_RESERVATION = '[Reservation] POST';
export const POST_RESERVATION_SUCCESS = '[Reservation] POST SUCCESS';
export const POST_RESERVATION_FAIL = '[Reservation] POST FAIL';

export const GET_RESERVATION = '[Reservation] GET';
export const GET_RESERVATION_SUCCESS = '[Reservation] GET SUCCESS';
export const GET_RESERVATION_FAIL = '[Reservation] GET FAIL';

export const DELETE_RESERVATION = '[Reservation] DELETE';
export const DELETE_RESERVATION_SUCCESS = '[Reservation] DELETE SUCCESS';
export const DELETE_RESERVATION_FAIL = '[Reservation] DELETE FAIL';

export const PUT_RESERVATION = '[Reservation] PUT';
export const PUT_RESERVATION_SUCCESS = '[Reservation] PUT SUCCESS';
export const PUT_RESERVATION_FAIL = '[Reservation] PUT FAIL';

export const CONFIRM_RESERVATION = '[Reservation] CONFIRM';
export const CONFIRM_RESERVATION_SUCCESS = '[Reservation] CONFIRM SUCCESS';
export const CONFIRM_RESERVATION_FAIL = '[Reservation] CONFIRM FAIL';

export const GetReservations = createAction(GET_RESERVATIONS);
export const GetReservationsSuccess = createAction(GET_RESERVATIONS_SUCCESS, props<{ payload: ReservationModel[] }>());
export const GetReservationsFail = createAction(GET_RESERVATIONS_FAIL, props<{ payload: HttpErrorResponse }>());

export const PostReservation = createAction(POST_RESERVATION, props<{ payload: ReservationModel }>());
export const PostReservationSuccess = createAction(POST_RESERVATION_SUCCESS);
export const PostReservationFail = createAction(POST_RESERVATION_FAIL, props<{ payload: HttpErrorResponse }>());

export const GetReservation = createAction(GET_RESERVATION, props<{ payload: string }>());
export const GetReservationSuccess = createAction(GET_RESERVATION_SUCCESS, props<{ payload: ReservationModel }>());
export const GetReservationFail = createAction(GET_RESERVATION_FAIL, props<{ payload: HttpErrorResponse }>());

export const DeleteReservation = createAction(DELETE_RESERVATION, props<{ payload: string }>());
export const DeleteReservationSuccess = createAction(DELETE_RESERVATION_SUCCESS);
export const DeleteReservationFail = createAction(DELETE_RESERVATION_FAIL, props<{ payload: HttpErrorResponse }>());

export const PutReservation = createAction(PUT_RESERVATION, props<{ payload: ReservationModel }>());
export const PutReservationSuccess = createAction(PUT_RESERVATION_SUCCESS);
export const PutReservationFail = createAction(PUT_RESERVATION_FAIL, props<{ payload: HttpErrorResponse }>());

export const ConfirmReservation = createAction(CONFIRM_RESERVATION, props<{ payload: string }>());
export const ConfirmReservationSuccess = createAction(CONFIRM_RESERVATION_SUCCESS, props<{ payload: ReservationModel }>());
export const ConfirmReservationFail = createAction(CONFIRM_RESERVATION_FAIL, props<{payload: HttpErrorResponse}>())