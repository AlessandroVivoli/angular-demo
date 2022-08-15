import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AccomodationTypeEnum } from 'src/app/enums/accomodation-type.enum';
import { AccomodationModel } from 'src/app/models/accomodation.model';
import { CustomErrorResponse } from 'src/app/models/custom-error-response.model';
import { LocationModel } from 'src/app/models/location.model';
import { LocationListService } from 'src/app/services/location-list.service';
import { GetRecommendations } from 'src/app/state/accomodations/accomodation.actions';
import {
	selectAccomodationError,
	selectAccomodationLoading,
	selectAccomodations,
	selectAllAccomodations
} from 'src/app/state/accomodations/accomodation.selectors';
import { AppState } from 'src/app/state/app.state';
import { GetLocations } from 'src/app/state/locations/location.actions';
import { selectAllLocations, selectLocationError, selectLocationLoading } from 'src/app/state/locations/location.selectors';

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

	constructor(private store: Store<AppState>, private locationService: LocationListService, private router: Router) {
		this.accomodations$ = this.store.select(selectAllAccomodations);
		this.accomodationsLoading$ = this.store.select(selectAccomodationLoading);
		this.accomodationsError$ = this.store.select(selectAccomodationError);

		this.locations$ = this.store.select(selectAllLocations);
		this.locationsLoading$ = this.store.select(selectLocationLoading);
		this.locationsError$ = this.store.select(selectLocationError);
	}

	ngOnInit(): void {
		const types: Set<string> = new Set();

		this.#sub.add(
			this.accomodations$.subscribe((accomodations) => {
				accomodations.forEach((accomodation) => types.add(accomodation.type.toString()));
			})
		);

		this.store.dispatch(GetRecommendations());
		this.store.dispatch(GetLocations());

		types.forEach((type) => {
			this.types.push({ inputValue: type, label: type });
		});
	}

	ngOnDestroy(): void {
		this.#sub.unsubscribe();
	}

	onSubmit(event: Event) {
		if (!this.el.nativeElement.checkValidity()) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			this.router.navigate(['location', this.place.value], { queryParams: {
				'check-in': this.checkIn.value,
				'check-out': this.checkOut.value,
				guests: this.guests.value,
				type: this.accomodationType.value
			} });
		}

		this.el.nativeElement.classList.add('was-validated');
	}

	accomodationClicked(accomodation: AccomodationModel) {
		this.router.navigate(['accomodation', accomodation.id]);
	}
}
