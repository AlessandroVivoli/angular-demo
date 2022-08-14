import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccomodationTypeEnum } from 'src/app/enums/accomodation-type.enum';
import { AccomodationModel } from 'src/app/models/accomodation.model';
import { AccomodationListService } from 'src/app/services/accomodation-list.service';
import { LocationListService } from 'src/app/services/location-list.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './accomodations.component.html',
  styleUrls: ['./accomodations.component.scss']
})
export class AccomodationsComponent implements OnInit, OnDestroy {

  id?: string;
  locationName?: string;

  checkIn = new FormControl('');
  checkOut = new FormControl('');
  guests = new FormControl<number>(0);
  accomodationType = new FormControl('');

  accomodations: AccomodationModel[] = [];

  data: { inputValue: string, label: string }[] = [];
  #sub: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private apartmentService: AccomodationListService,
    private locationService: LocationListService,
    private router: Router
  ) {
    const types: Set<string> = new Set(apartmentService.accomodationList.map(
      (accomodation) => AccomodationTypeEnum[accomodation.type]
    ));

    types.forEach(type => {
      this.data.push({ inputValue: type, label: type })
    });
  }

  ngOnInit(): void {
    this.#sub.add(
      this.activatedRoute.queryParams.subscribe(params => {
        this.checkIn.setValue(params['check-in']);
        this.checkOut.setValue(params['check-out']);
        this.guests.setValue(params['guests']);
        this.accomodationType.setValue(params['type']);

        console.log()
      })
    );

    this.#sub.add(
      this.activatedRoute.paramMap.subscribe(params => {
        this.id = params.get('id') as string;
      })
    )

    this.accomodations = this.apartmentService.accomodationList.filter(accomodation => {
      let location = this.locationService.locationList.find(location => location.id === accomodation.locationID);

      let filtered = false;

      if (
        (!this.id || location!.id === this.id) &&
        (!this.guests.value || (!!accomodation.personCount && this.guests.value < accomodation.personCount)) &&
        (!this.accomodationType.value || this.accomodationType.value === AccomodationTypeEnum[accomodation.type])
      ) filtered = true;

      return filtered;
    });

    const location = this.locationService.locationList.find(location => location.id === this.id);

    this.locationName = location?.name;
  }

  ngOnDestroy(): void {
    this.#sub.unsubscribe();
  }

  onSearch(): void {
    const checkInValue = this.checkIn.value !== undefined ? this.checkIn.value : '';
    const checkOutValue = this.checkOut.value !== undefined ? this.checkOut.value : '';
    const guestsValue = this.guests.value !== undefined ? this.guests.value : 0;
    const typeValue = this.accomodationType.value !== undefined ? this.accomodationType.value : '';

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';

    if (!!this.id)
      this.router.navigate(
        ['/location', this.id],
        {
          queryParams: {
            "check-in": checkInValue,
            "check-out": checkOutValue,
            "guests": guestsValue,
            "type": typeValue
          }
        }
      );
    else
      this.router.navigate(
        ['/recommendations'],
        {
          queryParams: {
            "check-in": checkInValue,
            "check-out": checkOutValue,
            "guests": guestsValue,
            "type": typeValue
          }
        }
      );
  }

  accommodationClicked(accomodation: AccomodationModel) {
    this.router.navigate(['accomodation', accomodation.id]);
  }
}
