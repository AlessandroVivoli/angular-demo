import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { StayVacationService } from 'src/app/services/stay-vacation.service';
import * as LocationActions from './location.actions';

@Injectable()
export class LocationEffects {
	getLocation = createEffect(() =>
		this.actions$.pipe(
			ofType(LocationActions.GetLocation),
			switchMap(({ payload }) =>
				from(this.stayVacationService.getLocation(payload)).pipe(
					map((location) => LocationActions.GetLocationSuccess({ payload: location })),
					catchError((error) => of(LocationActions.GetLocationFail({ payload: error })))
				)
			)
		)
	);

	constructor(private actions$: Actions, private stayVacationService: StayVacationService) {}
}
