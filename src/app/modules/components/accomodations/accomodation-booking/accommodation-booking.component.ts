import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccomodationTypeEnum } from 'src/app/enums/accomodation-type.enum';
import { AccomodationModel } from 'src/app/models/accomodation.model';
import { LocationModel } from 'src/app/models/location.model';
import { ReservationModel } from 'src/app/models/reservation.model';
import { AccomodationListService } from '../../../../services/accomodation-list.service';
import { LocationListService } from '../../../../services/location-list.service';
import { ReservationListService } from '../../../../services/reservation-list.service';

declare var $: any;

@Component({
  selector: 'app-accomodation-booking',
  templateUrl: './accomodation-booking.component.html',
  styleUrls: ['./accomodation-booking.component.scss']
})
export class AccomodationBookingComponent implements OnInit, OnDestroy {

  accommodation: AccomodationModel;
  location: LocationModel;

  #sub: Subscription = new Subscription();
  private id: string;
  nights: number;

  fullName = new FormControl();
  email = new FormControl();
  guestCount = new FormControl();
  checkIn = new FormControl();
  checkOut = new FormControl();

  year: number;

  AccommodationType = AccomodationTypeEnum;

  @ViewChild('submitForm')
  private form: ElementRef<HTMLFormElement>;

  constructor(
    private accommodationList: AccomodationListService,
    private locationList: LocationListService,
    private reservationList: ReservationListService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.#sub.add(
      this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
      })
    );

    this.accommodation = this.accommodationList.accomodationList.find(accommodation => accommodation.id === this.id) as AccomodationModel;
    this.location = this.locationList.locationList.find(location => location.id === this.accommodation.locationID) as LocationModel;
  }

  ngOnDestroy(): void {
    this.#sub.unsubscribe();
  }

  onSubmit() {
    this.year = new Date().getFullYear();

    this.nights = ((Date.parse(this.checkOut.value) - Date.parse(this.checkIn.value)) / 1000 / 60 / 60 / 24);

    if (this.form.nativeElement.checkValidity())
      $('#bookingModal').modal('show');
    this.form.nativeElement.classList.add('was-validated');
  }

  onConfirm() {
    let reservation = new ReservationModel();
    reservation.accomodationId = this.accommodation.id;
    reservation.checkIn = this.checkIn.value;
    reservation.checkOut = this.checkOut.value;
    reservation.confirmed = true;
    reservation.email = this.email.value;
    reservation.personsCount = this.guestCount.value;

    this.reservationList.addReservation(reservation);

    localStorage.setItem('reservation', JSON.stringify(this.reservationList.reservationList));
  }
}
