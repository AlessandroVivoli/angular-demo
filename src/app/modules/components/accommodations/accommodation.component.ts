import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  private sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private apartmentService: AccommodationListService, private locationService: LocationListService) {
    const types: Set<string> = new Set(apartmentService.accommodationList.map((accomodation) => AccommodationTypeEnum[accomodation.type]));

    types.forEach(type => {
      this.data.push({ inputValue: type, label: type })
    });
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.queryParams.subscribe(params => {
      this.city = params['city'];
      this.checkIn.setValue(params['check-in']);
      this.checkOut.setValue(params['check-out']);
      this.guests.setValue(params['guests']);
      this.accomodationType.setValue(params['type']);
    });

    this.accommodations = this.apartmentService.accommodationList.filter(apartment => {
      let location = this.locationService.locationList.find(location => location.id === apartment.locationID);

      if (!this.city || location!.name === this.city) return true;

      return false;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
