import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccommodationTypeEnum } from 'src/app/enums/accommodation-type.enum';
import { AccommodationModel } from 'src/app/models/accommodation.model';
import { LocationModel } from 'src/app/models/location.model';
import { ReservationModel } from 'src/app/models/reservation.model';
import { AccommodationListService } from '../../shared/services/accomodation-list.service';
import { LocationListService } from '../../shared/services/location-list.service';
import { ReservationListService } from '../../shared/services/reservation-list.service';

declare var $: any;

@Component({
  selector: 'app-accommodation-booking',
  templateUrl: './accommodation-booking.component.html',
  styleUrls: ['./accommodation-booking.component.scss']
})
export class AccommodationBookingComponent implements OnInit, OnDestroy {

  accommodation: AccommodationModel;
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

  AccommodationType = AccommodationTypeEnum;

  @ViewChild('submitForm')
  private form: ElementRef<HTMLFormElement>;

  constructor(
    private accommodationList: AccommodationListService,
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

    this.accommodation = this.accommodationList.accommodationList.find(accommodation => accommodation.id === this.id) as AccommodationModel;
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
    reservation.accommodationId = this.accommodation.id;
    reservation.checkIn = this.checkIn.value;
    reservation.checkOut = this.checkOut.value;
    reservation.confirmed = true;
    reservation.email = this.email.value;
    reservation.personsCount = this.guestCount.value;

    this.reservationList.addReservation(reservation);

    localStorage.setItem('reservation', JSON.stringify(this.reservationList.reservationList));
  }
}
