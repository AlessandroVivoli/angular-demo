import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { CustomErrorResponse } from 'src/app/models/custom-error-response.model';
import { ReservationModel } from 'src/app/models/reservation.model';
import { AppState } from 'src/app/state/app.state';
import { selectReservations, selectReservationsError, selectReservationsLoading } from 'src/app/state/reservations/reservation.selectors';
import { GetReservations } from 'src/app/state/reservations/reservations.actions';

@Component({
	selector: 'app-my-booking',
	templateUrl: './my-booking.component.html',
	styleUrls: ['./my-booking.component.scss']
})
export class MyBookingComponent implements OnInit, OnDestroy {
	reservations$: Observable<ReservationModel[]>;
	reservationsLoading$: Observable<boolean>;
	reservationsError$: Observable<CustomErrorResponse | undefined>;

	pastBookings: ReservationModel[] = [];
	upcomingBookings: ReservationModel[] = [];

	#sub: Subscription = new Subscription();

	constructor(private store: Store<AppState>) {
		this.reservations$ = this.store.select(selectReservations);
		this.reservationsLoading$ = this.store.select(selectReservationsLoading);
		this.reservationsError$ = this.store.select(selectReservationsError);
	}

	ngOnInit(): void {
		this.store.dispatch(GetReservations());

		this.reservations$ = this.reservations$.pipe(
			map((reservations) => {
				const newReservations: ReservationModel[] = [];

				console.log(reservations);
				console.log(localStorage.getItem('email'));

				for (let reservation of reservations) if (reservation.email === localStorage.getItem('email')) newReservations.push(reservation);

				return newReservations;
			})
		);

		this.#sub.add(
			this.reservations$.subscribe((reservations) => {
				for (let reservation of reservations) {
          if(reservation.checkIn && (new Date(reservation.checkIn).getTime() >= Date.now()))
            this.upcomingBookings.push(reservation);
          else this.pastBookings.push(reservation);
				}
			})
		);
	}

	ngOnDestroy(): void {
		this.#sub.unsubscribe();
	}
}
