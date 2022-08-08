import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccommodationTypeEnum } from 'src/app/enums/accommodation-type.enum';
import { AccommodationModel } from '../../../models/accommodation.model';
import { AccommodationListService } from '../shared/services/accomodation-list.service';
import { LocationListService } from '../shared/services/location-list.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent implements OnInit, OnDestroy {

  city: string;

  checkIn = new FormControl('');
  checkOut = new FormControl('');
  guests = new FormControl<number>(0);
  accomodationType = new FormControl('');

  accommodations: AccommodationModel[] = [];

  data: { inputValue: string, label: string }[] = [];

  #sub: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private apartmentService: AccommodationListService,
    private locationService: LocationListService,
    private router: Router
  ) {
    const types: Set<string> = new Set(apartmentService.accommodationList.map((accomodation) => AccommodationTypeEnum[accomodation.type]));

    types.forEach(type => {
      this.data.push({ inputValue: type, label: type })
    });
  }

  ngOnInit(): void {
    this.#sub.add(
      this.activatedRoute.queryParams.subscribe(params => {
        this.city = params['city'];
        this.checkIn.setValue(params['check-in']);
        this.checkOut.setValue(params['check-out']);
        this.guests.setValue(params['guests']);
        this.accomodationType.setValue(params['type']);
      })
    );

    this.accommodations = this.apartmentService.accommodationList.filter(accommodation => {
      let location = this.locationService.locationList.find(location => location.id === accommodation.locationID);

      let filtered = false;

      if (
        (!this.city || location!.name === this.city) &&
        (!this.guests.value || this.guests.value < accommodation.personCount) &&
        (!this.accomodationType.value || this.accomodationType.value === AccommodationTypeEnum[accommodation.type])
      ) filtered = true;

      return filtered;
    });
  }

  ngOnDestroy(): void {
    this.#sub.unsubscribe();
  }

  onSearch(): void {
    const checkInValue = this.checkIn.value !== undefined ? this.checkIn.value : '';
    const checkOutValue = this.checkOut.value !== undefined ? this.checkOut.value : '';
    const guestsValue = this.guests.value !== undefined ? this.guests.value : 0;
    const typeValue = this.accomodationType.value !== undefined ? this.accomodationType.value : '';
    const cityValue = this.city !== undefined ? this.city : '';

    this.router.navigateByUrl(
      `/accommodations?city=${cityValue}&check-in=${checkInValue}&check-out=${checkOutValue}&guests=${guestsValue}&type=${typeValue}`
    ).then(() => location.reload());
  }

  accommodationClicked(accommodation: AccommodationModel) {
    console.log('Accommodation output');
    console.log(accommodation.id);
    this.router.navigate(['accommodations', accommodation.id]);
  }
}
