import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, Observable, Subscription } from 'rxjs';
import { AccomodationTypeEnum } from 'src/app/enums/accomodation-type.enum';
import { AccomodationModel } from 'src/app/models/accomodation.model';
import { CustomErrorResponse } from 'src/app/models/custom-error-response.model';
import { LocationModel } from 'src/app/models/location.model';
import { GetAccomodations, GetLocationAccomodations, GetRecommendations } from 'src/app/state/accomodations/accomodation.actions';
import { selectAccomodationError, selectAccomodationLoading, selectAllAccomodations } from 'src/app/state/accomodations/accomodation.selectors';
import { AppState } from 'src/app/state/app.state';
import { GetLocations } from 'src/app/state/locations/location.actions';
import { selectAllLocations, selectLocationLoading } from 'src/app/state/locations/location.selectors';

@Component({
	selector: 'app-apartments',
	templateUrl: './accomodations.component.html',
	styleUrls: ['./accomodations.component.scss']
})
export class AccomodationsComponent implements OnInit, OnDestroy {
	id?: string;

	checkIn = new FormControl('');
	checkOut = new FormControl('');
	guests = new FormControl<number>(0);
	accomodationType = new FormControl('');

	accomodations$: Observable<AccomodationModel[]>;
	accomodationsError$: Observable<CustomErrorResponse | undefined>;
	accomodationsLoading$: Observable<boolean>;

	locations$: Observable<LocationModel[]>;
	locationsLoading$: Observable<boolean>;

	location?: LocationModel;

	properties: number = 0;

	data: { inputValue: string; label: string }[] = [];
	#sub: Subscription = new Subscription();

	private types: Set<string> = new Set();

	constructor(private activatedRoute: ActivatedRoute, private router: Router, private store: Store<AppState>) {
		this.accomodationsError$ = this.store.select(selectAccomodationError);
		this.accomodationsLoading$ = this.store.select(selectAccomodationLoading);
		this.accomodations$ = this.store.select(selectAllAccomodations);

		this.locations$ = this.store.select(selectAllLocations);
		this.locationsLoading$ = this.store.select(selectLocationLoading);
	}

	ngOnInit(): void {
		this.#sub.add(
			this.activatedRoute.paramMap.subscribe((params) => {
				this.id = params.get('id') as string;

				if (!this.id) this.store.dispatch(GetRecommendations());
				else {
					this.store.dispatch(GetLocationAccomodations({ payload: this.id }));
					this.store.dispatch(GetLocations());

					this.#sub.add(
						this.locations$.subscribe(locations => {
							this.location = locations.filter(location => location.id === this.id)[0];
						})
					)
				}
			})
		);

		this.#sub.add(
			this.activatedRoute.queryParams.subscribe((params) => {
				this.checkIn.setValue(params['check-in']);
				this.checkOut.setValue(params['check-out']);
				this.guests.setValue(params['guests']);
				this.accomodationType.setValue(params['type']);

				console.log();
			})
		);

		this.#sub.add(
			this.accomodations$.subscribe((accomodations) => {
				this.properties = accomodations.length;
				this.types = new Set(
					accomodations
						.map((accomodation) => {
							switch (accomodation.type) {
								case AccomodationTypeEnum.Apartment:
									return 'Apartment';
								case AccomodationTypeEnum.MobileHome:
									return 'MobileHome';
								case AccomodationTypeEnum.Room:
									return 'Room';
								case AccomodationTypeEnum.Suite:
									return 'Suite';
							}
						})
						.sort((first, next) => first.localeCompare(next))
				);

				this.data = [];

				this.types.forEach((type) => {
					this.data.push({ inputValue: type, label: type });
				});
			})
		);
	}

	ngOnDestroy(): void {
		this.#sub.unsubscribe();
	}

	onSearch(): void {
		const checkInValue = this.checkIn.value !== undefined ? this.checkIn.value : '';
		const checkOutValue = this.checkOut.value !== undefined ? this.checkOut.value : '';
		const guestsValue = this.guests.value !== undefined ? this.guests.value : 0;
		const typeValue = this.accomodationType.value !== undefined ? this.accomodationType.value : '';

		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
		this.router.onSameUrlNavigation = 'reload';

		if (!!this.id)
			this.router.navigate(['/location', this.id], {
				queryParams: {
					'check-in': checkInValue,
					'check-out': checkOutValue,
					guests: guestsValue,
					type: typeValue
				}
			});
		else
			this.router.navigate(['/recommendations'], {
				queryParams: {
					'check-in': checkInValue,
					'check-out': checkOutValue,
					guests: guestsValue,
					type: typeValue
				}
			});
	}

	accommodationClicked(accomodation: AccomodationModel) {
		this.router.navigate(['accomodation', accomodation.id]);
	}
}
