import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AccomodationTypeEnum } from 'src/app/enums/accomodation-type.enum';
import { AccomodationModel } from 'src/app/models/accomodation.model';
import { CustomErrorResponse } from 'src/app/models/custom-error-response.model';
import { LocationModel } from 'src/app/models/location.model';
import { ReservationModel } from 'src/app/models/reservation.model';
import { GetAccomodation } from 'src/app/state/accomodations/accomodation.actions';
import { selectAccomodation, selectAccomodationError, selectAccomodationLoading } from 'src/app/state/accomodations/accomodation.selectors';
import { AppState } from 'src/app/state/app.state';
import { GetLocation } from 'src/app/state/location/location.actions';
import { selectOneLocation } from 'src/app/state/location/location.selectors';

declare var $: any;

@Component({
	selector: 'app-accomodation-booking',
	templateUrl: './accomodation-booking.component.html',
	styleUrls: ['./accomodation-booking.component.scss']
})
export class AccomodationBookingComponent implements OnInit, OnDestroy {
	private id: string;

	accomodation$: Observable<AccomodationModel | undefined>;
	accomodationLoading$: Observable<boolean>;
	accomodationError$: Observable<CustomErrorResponse | undefined>;

	location$: Observable<LocationModel | undefined>;

	#sub: Subscription = new Subscription();
	nights: number;

	fullName = new FormControl();
	email = new FormControl();
	guestCount = new FormControl();
	checkIn = new FormControl();
	checkOut = new FormControl();

	year: number;

	AccomodationType = AccomodationTypeEnum;

	accomodation: AccomodationModel;

	@ViewChild('submitForm')
	private form: ElementRef<HTMLFormElement>;

	constructor(private activatedRoute: ActivatedRoute, private store: Store<AppState>) {
		this.accomodation$ = this.store.select(selectAccomodation);
		this.accomodationLoading$ = this.store.select(selectAccomodationLoading);
		this.accomodationError$ = this.store.select(selectAccomodationError);
		this.location$ = this.store.select(selectOneLocation);
	}

	ngOnInit(): void {
		this.#sub.add(
			this.activatedRoute.params.subscribe((params) => {
				this.id = params['id'];

				this.store.dispatch(GetAccomodation({ payload: this.id }));
			})
		);

		this.#sub.add(
			this.accomodation$.subscribe((accomodation) => {
				if (accomodation?.locationID) this.store.dispatch(GetLocation({ payload: accomodation.locationID }));
				this.accomodation = accomodation as AccomodationModel;
			})
		);
	}

	ngOnDestroy(): void {
		this.#sub.unsubscribe();
	}

	onSubmit() {
		this.year = new Date().getFullYear();

		this.nights = (Date.parse(this.checkOut.value) - Date.parse(this.checkIn.value)) / 1000 / 60 / 60 / 24;

		if (this.form.nativeElement.checkValidity()) $('#bookingModal').modal('show');
		this.form.nativeElement.classList.add('was-validated');
	}

	onConfirm() {
		let reservation = new ReservationModel();
		reservation.accomodationId = this.id;
		reservation.accomodation = this.accomodation;
		reservation.checkIn = this.checkIn.value;
		reservation.checkOut = this.checkOut.value;
		reservation.confirmed = true;
		reservation.email = this.email.value;
		reservation.personsCount = this.guestCount.value;
	}
}
