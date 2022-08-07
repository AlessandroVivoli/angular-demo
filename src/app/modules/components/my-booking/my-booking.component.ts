import { Component, OnInit } from '@angular/core';
import { AccommodationModel } from 'src/app/models/accommodation.model';
import { ReservationModel } from 'src/app/models/reservation.model';
import { AccommodationListService } from '../shared/services/accomodation-list.service';
import { ReservationListService } from '../shared/services/reservation-list.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.scss']
})
export class MyBookingComponent implements OnInit {

  reservations: AccommodationModel[] = [];

  constructor(
    private accommodationList: AccommodationListService,
    private reservationList: ReservationListService
  ) { }

  ngOnInit(): void {
    this.reservations = this.accommodationList.accommodationList.filter(
      accommodation => this.reservationList.reservationList.find(
        reservation => reservation.accommodationId === accommodation.id
      )
    );
  }

  getReservation(accommodation: AccommodationModel): ReservationModel {
    return this.reservationList.reservationList.find(
      reservation => reservation.accommodationId === accommodation.id
    ) as ReservationModel;
  }
}
