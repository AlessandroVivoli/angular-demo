import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, mergeMap, Observable, of, switchMap } from 'rxjs';

import * as AccomodationActions from './accomodation.actions';
import { StayVacationService } from 'src/app/services/stay-vacation.service';

@Injectable()
export class AccomodationEffects {
	getAccomodations = createEffect(() =>
		this.actions$.pipe(
			ofType(AccomodationActions.GetAccomodations),
			switchMap(() =>
				from(this.stayVacationService.getAccommodations()).pipe(
					map((accomodations) => AccomodationActions.GetAccomodationsSuccess({ payload: accomodations })),
					catchError((error) => of(AccomodationActions.GetAccomodationsFail({ payload: error })))
				)
			)
		)
	);

	postAccomodation = createEffect(() =>
		this.actions$.pipe(
			ofType(AccomodationActions.PostAccomodation),
			switchMap(({ payload }) =>
				from(this.stayVacationService.postAccommodation(payload)).pipe(
					map(() => AccomodationActions.PostAccomodationSuccess()),
					catchError((error) => of(AccomodationActions.PostAccomodationFail({ payload: error })))
				)
			)
		)
	);

	getRecommendations = createEffect(() =>
		this.actions$.pipe(
			ofType(AccomodationActions.GetRecommendations),
			switchMap(() =>
				from(this.stayVacationService.getRecommendations()).pipe(
					map((accomodations) => AccomodationActions.GetRecommodationsSuccess({ payload: accomodations })),
					catchError((error) => of(AccomodationActions.GetAccomodationFail({ payload: error })))
				)
			)
		)
	);

	getLocationAccomodations = createEffect(() =>
		this.actions$.pipe(
			ofType(AccomodationActions.GetLocationAccomodations),
			switchMap(({ payload }) =>
				from(this.stayVacationService.getAccommodationsFromLocation(payload)).pipe(
					map((accomodations) => AccomodationActions.GetLocationAccomodationsSuccess({ payload: accomodations })),
					catchError((error) => of(AccomodationActions.GetLocationAccomodationsFail({ payload: error })))
				)
			)
		)
	);

	getAccomodation = createEffect(() =>
		this.actions$.pipe(
			ofType(AccomodationActions.GetAccomodation),
			switchMap(({ payload }) =>
				from(this.stayVacationService.getAccommodation(payload)).pipe(
					map((accomodation) => AccomodationActions.GetAccomodationSuccess({ payload: accomodation })),
					catchError((error) => of(AccomodationActions.GetAccomodationFail({ payload: error })))
				)
			)
		)
	);

	deleteAccomodation = createEffect(() =>
		this.actions$.pipe(
			ofType(AccomodationActions.DeleteAccomodation),
			switchMap(({ payload }) =>
				from(this.stayVacationService.deleteAccommodation(payload)).pipe(
					map(() => AccomodationActions.DeleteAccomodationSuccess()),
					catchError((error) => of(AccomodationActions.DeleteAccomodationFail({ payload: error })))
				)
			)
		)
	);

	putAccomodation = createEffect(() =>
		this.actions$.pipe(
			ofType(AccomodationActions.PutAccomodation),
			switchMap(({ payload }) =>
				from(this.stayVacationService.putAccommodation(payload)).pipe(
					map(() => AccomodationActions.DeleteAccomodationSuccess()),
					catchError((error) => of(AccomodationActions.PutAccomodationFail({ payload: error })))
				)
			)
		)
	);

	constructor(private actions$: Actions, private stayVacationService: StayVacationService) {}
}
