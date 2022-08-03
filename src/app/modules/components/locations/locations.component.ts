import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocationModel } from '../../../models/location.model';
import { AccommodationListService } from '../shared/services/accomodation-list.service';
import { LocationListService } from '../shared/services/location-list.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit, OnDestroy {
  places: { inputValue: string, label: string }[] = [];
  data: { location: LocationModel, num: number }[] = [];

  city = new FormControl('');

  @ViewChild('submit') button: ElementRef<HTMLButtonElement>;

  private sub: Subscription;

  constructor(
    private accomodationService: AccommodationListService,
    private locationService: LocationListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let city: string = '';

    this.sub = this.activatedRoute.queryParams.subscribe(params => {
      city = params['city'];
    });

    console.log(city);

    this.city.setValue(city);

    const locations = this.locationService.locationList;
    locations.filter(location => city === undefined || city === '' || location.name === city).forEach(location => {
      this.data.push({
        location: location,
        num: this.accomodationService.accommodationList.filter(apartment => apartment.locationID === location.id).reduce((first) => { return first + 1 }, 0)
      });
    })

    locations.forEach((location) => {
      this.places.push({ inputValue: location.name, label: location.name });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {
    this.router.navigateByUrl(`/locations?city=${this.city.value}`).then(() => location.reload());
  }

  onSelectChange(event: Event) {
    console.log(this.city.value);

    const parentDisplay = window.getComputedStyle(this.button.nativeElement.parentElement as HTMLDivElement).display;

    if (parentDisplay === 'none')
      this.router.navigateByUrl(`/locations?city=${this.city.value}`).then(() => location.reload());
  }
}
