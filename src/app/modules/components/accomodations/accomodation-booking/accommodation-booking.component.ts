import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, MinValidator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
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
import { selectReservationsError, selectReservationsLoading } from 'src/app/state/reservations/reservation.selectors';
import { PostReservation } from 'src/app/state/reservations/reservations.actions';

import * as uuid from 'uuid';
import { FormControlInputComponent } from '../../form-control-input/form-control-input.component';

declare var $: any;

@Component({
	selector: 'app-accomodation-booking',
	templateUrl: './accomodation-booking.component.html',
	styleUrls: ['./accomodation-booking.component.scss']
})
export class AccomodationBookingComponent implements OnInit, OnDestroy, AfterViewInit {
	private id: string;

	@ViewChildren(FormControlInputComponent) test: QueryList<FormControlInputComponent>;

	accomodation$: Observable<AccomodationModel | undefined>;
	accomodationLoading$: Observable<boolean>;
	accomodationError$: Observable<CustomErrorResponse | undefined>;

	location$: Observable<LocationModel | undefined>;

	#sub: Subscription = new Subscription();
	nights: number;

	private dateRegex: RegExp =
		/^(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Oct|Nov|Dec) (?:3[01]|[12][0-9]|0[1-9]) (?:\d{2}|\d{4})$/g;

	fullName = new FormControl();
	email = new FormControl();
	guestCount = new FormControl();
	checkIn = new FormControl<string>('', {
		validators: [
			Validators.required,
			Validators.pattern(
				this.dateRegex
			),
			(control) => {
				if (!this.checkOut || !this.checkOut.value) return null;
				if (Date.parse(control.value) >= Date.parse(this.checkOut.value)) return { faulty: true };
				return null;
			},
			(control) => {
				if (Date.parse(control.value) < Date.now()) return { faulty: true };
				return null;
			}
		]
	});
	checkOut = new FormControl<string>('', {
		validators: [
			Validators.required,
			Validators.pattern(
				this.dateRegex
			),
			(control) => {
				if (!this.checkIn.value) return null;
				if (Date.parse(control.value) <= Date.parse(this.checkIn.value)) return { faulty: true };
				return null;
			},
			(control) => {
				if (Date.parse(control.value) <= Date.now()) return { faulty: true };
				return null;
			}
		]
	});

	year: number;

	AccomodationType = AccomodationTypeEnum;

	accomodation: AccomodationModel;

	reservation: ReservationModel = new ReservationModel();

	@ViewChild('submitForm')
	private form: ElementRef<HTMLFormElement>;

	reservationLoading$: Observable<boolean>;
	reservationError$: Observable<CustomErrorResponse | undefined>;

	constructor(private activatedRoute: ActivatedRoute, private store: Store<AppState>, private toast: ToastrService) {
		this.accomodation$ = this.store.select(selectAccomodation);
		this.accomodationLoading$ = this.store.select(selectAccomodationLoading);
		this.accomodationError$ = this.store.select(selectAccomodationError);
		this.location$ = this.store.select(selectOneLocation);
		this.reservationLoading$ = this.store.select(selectReservationsLoading);
		this.reservationError$ = this.store.select(selectReservationsError);
	}
	ngAfterViewInit(): void {
		console.log(this.checkIn.valid);
		console.log(this.checkOut.valid);
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

		if (this.checkIn.value) this.reservation.checkIn = new Date(this.checkIn.value);
		if (this.checkOut.value) this.reservation.checkOut = new Date(this.checkOut.value);

		if (this.checkOut.value && this.checkIn.value)
			this.nights = (Date.parse(this.checkOut.value) - Date.parse(this.checkIn.value)) / 1000 / 60 / 60 / 24;

		if (this.checkValidity()) $('#bookingModal').modal('show');
		this.form.nativeElement.classList.add('was-validated');
	}

	private checkValidity(): boolean {
		const formValid = this.form.nativeElement.checkValidity();

		return formValid;
	}

	onConfirm() {
		this.reservation.id = uuid.v4();
		this.reservation.accomodationId = this.id;
		this.reservation.accomodation = this.accomodation;
		
		this.reservation.confirmed = false;
		this.reservation.email = this.email.value;
		this.reservation.personsCount = this.guestCount.value;

		this.store.dispatch(PostReservation({ payload: this.reservation }));

		this.#sub.add(
			this.reservationLoading$.subscribe((loading) => {
				if (!loading) {
					this.#sub.add(
						this.reservationError$.subscribe((error) => {
							if (error)
								this.toast.error(`Could not create reservation: ${error.statusText}`, undefined, { tapToDismiss: true, disableTimeOut: true });
							else this.toast.success('Reservation created successfully');
						})
					);
				}
			})
		);

		this.form.nativeElement.classList.remove('was-validated');
		this.fullName.setValue('');
		this.checkIn.setValue('');
		this.checkOut.setValue('');
		this.email.setValue('');
		this.guestCount.setValue('');
	}
}
