import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AccomodationTypeEnum } from 'src/app/enums/accomodation-type.enum';
import { AccomodationModel } from 'src/app/models/accomodation.model';
import { CustomErrorResponse } from 'src/app/models/custom-error-response.model';
import { LocationModel } from 'src/app/models/location.model';
import { GetAccomodation } from 'src/app/state/accomodations/accomodation.actions';
import { selectAccomodation, selectAccomodationError, selectAccomodationLoading } from 'src/app/state/accomodations/accomodation.selectors';
import { AppState } from 'src/app/state/app.state';
import { GetLocation } from 'src/app/state/location/location.actions';
import { selectLocation, selectLocationLoading, selectOneLocation } from 'src/app/state/location/location.selectors';
import { selectLocationsLoading } from 'src/app/state/locations/locations.selectors';

@Component({
	selector: 'app-accomodation-details',
	templateUrl: './accomodation-details.component.html',
	styleUrls: ['./accomodation-details.component.scss']
})
export class AccomodationDetailsComponent implements OnInit, OnDestroy {
	accomodation$: Observable<AccomodationModel | undefined>;
	accomodationLoading$: Observable<boolean>;
	accomodationError$: Observable<CustomErrorResponse | undefined>;

	locationLoading$: Observable<boolean>;

	location$: Observable<LocationModel | undefined>;

	AccomodationType = AccomodationTypeEnum;

	#sub: Subscription = new Subscription();
	private id: string;

	constructor(private activatedRoute: ActivatedRoute, private router: Router, private store: Store<AppState>) {
		this.accomodation$ = this.store.select(selectAccomodation);
		this.accomodationLoading$ = this.store.select(selectAccomodationLoading);
		this.accomodationError$ = this.store.select(selectAccomodationError);

		this.location$ = this.store.select(selectOneLocation);
		this.locationLoading$ = this.store.select(selectLocationLoading);
	}

	ngOnInit(): void {
		this.#sub.add(
			this.activatedRoute.params.subscribe((params) => {
				this.id = params['id'];
				this.store.dispatch(GetAccomodation({ payload: this.id }));
			})
		);

		this.#sub.add(this.accomodation$.subscribe((accomodation) => this.store.dispatch(GetLocation({ payload: accomodation?.locationID as string }))));
	}

	ngOnDestroy(): void {
		this.#sub.unsubscribe();
	}

	onBook() {
		this.router.navigate(['/accomodation', this.id, 'book']);
	}
}
