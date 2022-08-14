import { Component, OnInit } from '@angular/core';
import { AccomodationModel } from 'src/app/models/accomodation.model';
import { ReservationModel } from 'src/app/models/reservation.model';
import { AccomodationListService } from 'src/app/services/accomodation-list.service';
import { ReservationListService } from 'src/app/services/reservation-list.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.scss']
})
export class MyBookingComponent implements OnInit {

  reservations: AccomodationModel[] = [];

  constructor(
    private accommodationList: AccomodationListService,
    private reservationList: ReservationListService
  ) { }

  ngOnInit(): void {
    this.reservations = this.accommodationList.accomodationList.filter(
      accommodation => this.reservationList.reservationList.find(
        reservation => reservation.accomodationId === accommodation.id
      )
    );
  }

  getReservation(accommodation: AccomodationModel): ReservationModel {
    return this.reservationList.reservationList.find(
      reservation => reservation.accomodationId === accommodation.id
    ) as ReservationModel;
  }
}
