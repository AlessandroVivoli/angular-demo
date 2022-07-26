import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AccomodationModel } from 'src/app/models/accomodation.model';
import { CustomErrorResponse } from 'src/app/models/custom-error-response.model';
import { LocationModel } from 'src/app/models/location.model';
import { GetRecommendations } from 'src/app/state/accomodations/accomodation.actions';
import { selectAccomodationError, selectAccomodationLoading, selectAllAccomodations } from 'src/app/state/accomodations/accomodation.selectors';
import { AppState } from 'src/app/state/app.state';
import { GetLocations } from 'src/app/state/locations/locations.actions';
import { selectAllLocations, selectLocationsError, selectLocationsLoading } from 'src/app/state/locations/locations.selectors';

@Component({
	selector: 'app-main',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
	accomodations$: Observable<AccomodationModel[]>;
	accomodationsLoading$: Observable<boolean>;
	accomodationsError$: Observable<CustomErrorResponse | undefined>;

	locations$: Observable<LocationModel[]>;
	locationsLoading$: Observable<boolean>;
	locationsError$: Observable<CustomErrorResponse | undefined>;

	place = new FormControl('');
	checkIn = new FormControl('');
	checkOut = new FormControl('');
	guests = new FormControl<number>(0);
	accomodationType = new FormControl('');

	places: { inputValue: string; label: string }[] = [];
	types: { inputValue: string; label: string }[] = [];

	@ViewChild('form') el: ElementRef<HTMLFormElement>;

	#sub: Subscription = new Subscription();

	constructor(private store: Store<AppState>, private router: Router) {
		this.accomodations$ = this.store.select(selectAllAccomodations);
		this.accomodationsLoading$ = this.store.select(selectAccomodationLoading);
		this.accomodationsError$ = this.store.select(selectAccomodationError);

		this.locations$ = this.store.select(selectAllLocations);
		this.locationsLoading$ = this.store.select(selectLocationsLoading);
		this.locationsError$ = this.store.select(selectLocationsError);

		this.places = [];
		this.types = [];
	}

	ngOnInit(): void {
		this.#sub.add(
			this.accomodations$.subscribe((accomodations) => {
				this.types = [
					...new Set(
						accomodations.map((accomodation) => ({ inputValue: accomodation.type.toString(), label: accomodation.type.toString() }))
					)
				];
			})
		);

		this.#sub.add(
			this.locations$.subscribe((locations) => {
				this.places = locations.map((location) => ({ inputValue: location.id, label: location.name as string }));
			})
		);

		this.store.dispatch(GetRecommendations());
		this.store.dispatch(GetLocations());
	}

	ngOnDestroy(): void {
		this.#sub.unsubscribe();
	}

	onSubmit(event: Event) {
		if (!this.el.nativeElement.checkValidity()) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			this.router.navigate(['location', this.place.value], {
				queryParams: {
					'check-in': this.checkIn.value,
					'check-out': this.checkOut.value,
					guests: this.guests.value,
					type: this.accomodationType.value
				}
			});
		}

		this.el.nativeElement.classList.add('was-validated');
	}

	accomodationClicked(accomodation: AccomodationModel) {
		this.router.navigate(['accomodation', accomodation.id]);
	}
}
