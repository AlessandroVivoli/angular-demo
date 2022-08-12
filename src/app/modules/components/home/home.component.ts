import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AccommodationTypeEnum } from 'src/app/enums/accommodation-type.enum';
import { AccommodationModel } from '../../../models/accommodation.model';
import { LocationModel } from '../../../models/location.model';
import { AccommodationListService } from '../shared/services/accomodation-list.service';
import { LocationListService } from '../shared/services/location-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  locations: LocationModel[] = [];
  accomodations: AccommodationModel[] = [];
  nums: number[] = [];

  place = new FormControl('');
  checkIn = new FormControl('');
  checkOut = new FormControl('');
  guests = new FormControl<number>(0);
  accomodation = new FormControl('');

  places: { inputValue: string, label: string }[] = [];
  types: { inputValue: string, label: string }[] = [];

  @ViewChild('form') el: ElementRef<HTMLFormElement>;

  constructor(private accommodationService: AccommodationListService, private locationService: LocationListService, private router: Router) {}

  ngOnInit(): void {
    this.accomodations = this.accommodationService.accommodationList;
    this.locations = this.locationService.locationList;

    const types: Set<string> = new Set(this.accommodationService.accommodationList.map((accommodation) => AccommodationTypeEnum[accommodation.type]));

    types.forEach(type => {
      this.types.push({ inputValue: type, label: type })
    });

    this.locations.forEach((location) => {
      this.places.push({ inputValue: location.name, label: location.name });

      this.nums.push(
        this.accomodations.filter((accommodation) => accommodation.locationID === location.id)
          .reduce((prev) => {
            return prev + 1;
          }, 0)
      );
    })
  }

  onSubmit(event: Event) {
    if (!this.el.nativeElement.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.router.navigateByUrl(`/accommodations?city=${this.place.value}&check-in=${this.checkIn.value}&check-out=${this.checkOut.value}&guests=${this.guests.value}&type=${this.accomodation.value}`)
    }

    this.el.nativeElement.classList.add('was-validated')
  }
}
