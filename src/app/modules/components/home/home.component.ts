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
import { selectAccomodationError, selectAccomodationLoading, selectAccomodations } from 'src/app/state/accomodations/accomodation.selectors';
import { AppState } from 'src/app/state/app.state';

@Component({
	selector: 'app-main',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
	locations: LocationModel[] = [];
	accomodations: AccomodationModel[] = [];
	nums: number[] = [];

	place = new FormControl('');
	checkIn = new FormControl('');
	checkOut = new FormControl('');
	guests = new FormControl<number>(0);
	accomodation = new FormControl('');

	places: { inputValue: string; label: string }[] = [];
	types: { inputValue: string; label: string }[] = [];

	@ViewChild('form') el: ElementRef<HTMLFormElement>;

	#sub: Subscription = new Subscription();
	accomodationsLoading$: Observable<boolean>;
	accomodationsError$: Observable<CustomErrorResponse | undefined>;

	constructor(private store: Store<AppState>, private locationService: LocationListService, private router: Router) {
		this.accomodationsLoading$ = this.store.select(selectAccomodationLoading);
		this.accomodationsError$ = this.store.select(selectAccomodationError);
	}

	ngOnInit(): void {
		this.#sub.add(this.store.select(selectAccomodations).subscribe(({ accomodations }) => (this.accomodations = accomodations)));

		this.store.dispatch(GetRecommendations());

		this.locations = this.locationService.locationList;

		const types: Set<string> = new Set(this.accomodations.map((accommodation) => AccomodationTypeEnum[accommodation.type]));

		types.forEach((type) => {
			this.types.push({ inputValue: type, label: type });
		});

		this.locations.forEach((location) => {
			this.places.push({ inputValue: location.id, label: location.name });

			this.nums.push(
				this.accomodations
					.filter((accommodation) => accommodation.locationID === location.id)
					.reduce((prev) => {
						return prev + 1;
					}, 0)
			);
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
			// this.router.navigateByUrl(`/accommodations?city=${this.place.value}&check-in=${this.checkIn.value}&check-out=${this.checkOut.value}&guests=${this.guests.value}&type=${this.accomodation.value}`)
			this.router.navigate(['location', this.place.value]);
		}

		this.el.nativeElement.classList.add('was-validated');
	}

	accomodationClicked(accomodation: AccomodationModel) {
		this.router.navigate(['accomodation', accomodation.id]);
	}
}
