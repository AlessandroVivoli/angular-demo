import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { StayVacationService } from 'src/app/services/stay-vacation.service';
import * as LocationActions from './location.actions';

@Injectable()
export class LocationEffects {
	getLocations = createEffect(() =>
		this.actions$.pipe(
			ofType(LocationActions.GetLocations),
			switchMap(() =>
				from(this.stayVacationService.getLocations()).pipe(
					map((locations) => LocationActions.GetLocationsSuccess({ payload: locations })),
					catchError((error) => of(LocationActions.GetLocationsFail({ payload: error })))
				)
			)
		)
	);

	putLocation = createEffect(() =>
		this.actions$.pipe(
			ofType(LocationActions.PutLocation),
			switchMap(({ payload }) =>
				from(this.stayVacationService.putLocation(payload)).pipe(
					map(() => LocationActions.PutLocationSuccess()),
					catchError((error) => of(LocationActions.PutLocationFail({ payload: error })))
				)
			)
		)
	);

	constructor(private actions$: Actions, private stayVacationService: StayVacationService) {}
}
