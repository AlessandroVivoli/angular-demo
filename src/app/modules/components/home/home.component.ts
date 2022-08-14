import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AccomodationTypeEnum } from 'src/app/enums/accomodation-type.enum';
import { AccomodationModel } from 'src/app/models/accomodation.model';
import { LocationModel } from 'src/app/models/location.model';
import { AccomodationListService } from 'src/app/services/accomodation-list.service';
import { LocationListService } from 'src/app/services/location-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  locations: LocationModel[] = [];
  accomodations: AccomodationModel[] = [];
  nums: number[] = [];

  place = new FormControl('');
  checkIn = new FormControl('');
  checkOut = new FormControl('');
  guests = new FormControl<number>(0);
  accomodation = new FormControl('');

  places: { inputValue: string, label: string }[] = [];
  types: { inputValue: string, label: string }[] = [];

  @ViewChild('form') el: ElementRef<HTMLFormElement>;

  constructor(private accommodationService: AccomodationListService, private locationService: LocationListService, private router: Router) {}

  ngOnInit(): void {
    this.accomodations = this.accommodationService.accomodationList;
    this.locations = this.locationService.locationList;

    const types: Set<string> = new Set(this.accommodationService.accomodationList.map((accommodation) => AccomodationTypeEnum[accommodation.type]));

    types.forEach(type => {
      this.types.push({ inputValue: type, label: type })
    });

    this.locations.forEach((location) => {
      this.places.push({ inputValue: location.id, label: location.name });

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
      // this.router.navigateByUrl(`/accommodations?city=${this.place.value}&check-in=${this.checkIn.value}&check-out=${this.checkOut.value}&guests=${this.guests.value}&type=${this.accomodation.value}`)
      this.router.navigate(['location', this.place.value])
    }

    this.el.nativeElement.classList.add('was-validated')
  }

  accomodationClicked(accomodation: AccomodationModel) {
    this.router.navigate(['accomodation', accomodation.id])
  }
}
