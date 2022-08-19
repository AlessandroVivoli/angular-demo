import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { StayVacationService } from 'src/app/services/stay-vacation.service';
import * as ReservationActions from './reservations.actions';

@Injectable()
export class ReservationEffects {
	getReservations = createEffect(() =>
		this.actions$.pipe(
			ofType(ReservationActions.GetReservations),
			switchMap(() =>
				from(this.stayVacationService.getReservations()).pipe(
					map((reservations) => ReservationActions.GetReservationsSuccess({ payload: reservations })),
					catchError((error) => of(ReservationActions.GetReservationsFail({ payload: error })))
				)
			)
		)
	);

	postReservation = createEffect(() =>
		this.actions$.pipe(
			ofType(ReservationActions.PostReservation),
			switchMap(({ payload }) =>
				from(this.stayVacationService.postReservation(payload)).pipe(
					map(() => ReservationActions.PostReservationSuccess()),
					catchError((error) => of(ReservationActions.PostReservationFail({ payload: error })))
				)
			)
		)
	);

	getReservation = createEffect(() =>
		this.actions$.pipe(
			ofType(ReservationActions.GetReservation),
			switchMap(({ payload }) =>
				from(this.stayVacationService.getReservation(payload)).pipe(
					map((reservation) => ReservationActions.GetReservationSuccess({ payload: reservation })),
					catchError((error) => of(ReservationActions.GetReservationFail({ payload: error })))
				)
			)
		)
	);

	deleteReservation = createEffect(() =>
		this.actions$.pipe(
			ofType(ReservationActions.DeleteReservation),
			switchMap(({ payload }) =>
				from(this.stayVacationService.deleteReservation(payload)).pipe(
					map(() => ReservationActions.DeleteReservationSuccess()),
					catchError((error) => of(ReservationActions.DeleteReservationFail({ payload: error })))
				)
			)
		)
	);

	putReservation = createEffect(() =>
		this.actions$.pipe(
			ofType(ReservationActions.PutReservation),
			switchMap(({ payload }) =>
				from(this.stayVacationService.putReservation(payload)).pipe(
					map(() => ReservationActions.PutReservationSuccess()),
					catchError((error) => of(ReservationActions.PutReservationFail({ payload: error })))
				)
			)
		)
	);

	confirmReservation = createEffect(() =>
		this.actions$.pipe(
			ofType(ReservationActions.ConfirmReservation),
			switchMap(({ payload }) =>
				from(this.stayVacationService.confirmReservation(payload)).pipe(
					map((reservation) => ReservationActions.ConfirmReservationSuccess({ payload: reservation })),
					catchError((error) => of(ReservationActions.ConfirmReservationFail({ payload: error })))
				)
			)
		)
	);

	constructor(private actions$: Actions, private stayVacationService: StayVacationService) {}
}
