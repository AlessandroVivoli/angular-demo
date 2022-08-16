import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AccomodationModel } from 'src/app/models/accomodation.model';
import { CustomErrorResponse } from 'src/app/models/custom-error-response.model';
import { LocationModel } from 'src/app/models/location.model';
import { GetLocationAccomodations, GetRecommendations } from 'src/app/state/accomodations/accomodation.actions';
import { selectAccomodationError, selectAccomodationLoading, selectAllAccomodations } from 'src/app/state/accomodations/accomodation.selectors';
import { AppState } from 'src/app/state/app.state';
import { GetLocations } from 'src/app/state/locations/locations.actions';
import { selectAllLocations, selectLocationsLoading } from 'src/app/state/locations/locations.selectors';

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

	accomodations: AccomodationModel[] = [];

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
		this.locationsLoading$ = this.store.select(selectLocationsLoading);
	}

	ngOnInit(): void {
		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
		this.router.onSameUrlNavigation = 'reload';

		this.#sub.add(
			this.activatedRoute.paramMap.subscribe((params) => {
				this.id = params.get('id') as string;

				if (!this.id) this.store.dispatch(GetRecommendations());
				else {
					this.store.dispatch(GetLocationAccomodations({ payload: this.id }));
					this.store.dispatch(GetLocations());

					this.#sub.add(
						this.locations$.subscribe((locations) => {
							this.location = locations.find((location) => location.id === this.id);
						})
					);
				}
			})
		);

		this.#sub.add(
			this.activatedRoute.queryParams.subscribe((params) => {
				this.checkIn.setValue(params['check-in']);
				this.checkOut.setValue(params['check-out']);
				this.guests.setValue(params['guests']);
				this.accomodationType.setValue(params['type']);

				this.#sub.add(
					this.accomodations$.subscribe((accomodations) => {
						this.accomodations = accomodations
							.filter(
								(accomodation) =>
									(!accomodation.capacity || !this.guests.value || this.guests.value <= accomodation.capacity) &&
									(!accomodation.type ||
										!this.accomodationType.value ||
										this.accomodationType.value.trim().length === 0 ||
										accomodation.type.toString() == this.accomodationType.value)
							)
							.sort((prev, next) => {
								if (!prev.categorization || !next.categorization) return 0;

								if (prev.categorization > next.categorization) return -1;
								if (prev.categorization < next.categorization) return 1;
								return 0;
							});

						this.properties = this.accomodations.length;

						this.types = new Set(accomodations.map((accomodation) => accomodation.type.toString()).sort((first, next) => first.localeCompare(next)));

						this.data = [];

						this.types.forEach((type) => {
							this.data.push({ inputValue: type, label: type });
						});
					})
				);
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
