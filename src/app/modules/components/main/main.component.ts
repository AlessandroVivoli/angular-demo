import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApartmentModel } from '../shared/models/apartment/apartment.model';
import { LocationModel } from '../shared/models/location/location.model';
import { ApartmentListService } from '../shared/services/apartment-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  locations: LocationModel[] = [];
  apartments: ApartmentModel[] = [];
  nums: number[] = [];

  place = new FormControl('');
  checkIn = new FormControl('');
  checkOut = new FormControl('');
  guests = new FormControl<number>(0);
  accomodation = new FormControl('');

  places: { inputValue: string, label: string }[] = [];
  types: { inputValue: string, label: string }[];

  @ViewChild('form') el: ElementRef<HTMLFormElement>;

  constructor(private apartmentService: ApartmentListService, private router: Router) {
    this.apartments = apartmentService.apartmentList;
    this.locations = [...new Set(this.apartments.map(apartment => { return apartment.location }))];

    this.types = apartmentService.accomodationTypes;

    this.locations.forEach((location) => {
      this.places.push({ inputValue: location.city, label: location.city });

      this.nums.push(this.apartments.filter((apartment) => apartment.location === location).reduce((prev, next) => {
        return prev + 1;
      }, 0));
    })
  }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    if (!this.el.nativeElement.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.router.navigateByUrl(`/apartments?city=${this.place.value}&check-in=${this.checkIn.value}&check-out=${this.checkOut.value}&guests=${this.guests.value}&type=${this.accomodation.value}`)
    }

    this.el.nativeElement.classList.add('was-validated')
  }
}
