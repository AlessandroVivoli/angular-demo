import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocationModel } from '../shared/models/location/location.model';
import { ApartmentListService } from '../shared/services/apartment-list.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit, OnDestroy {
  places: { inputValue: string, label: string }[] = [];
  data: { src: string, href: string, location: LocationModel, num: number }[] = [];

  city = new FormControl('');

  @ViewChild('submit') button: ElementRef<HTMLButtonElement>;

  private sub: Subscription;

  constructor(
    private apartmentService: ApartmentListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    let city: string = '';

    this.sub = this.activatedRoute.queryParams.subscribe(params => {
      city = params['city'];
    });

    console.log(city);

    this.city.setValue(city);

    const locations = [...new Set(this.apartmentService.apartmentList.map((apartment) => { return apartment.location }))];
    locations.filter(location => city === undefined || city === '' || location.city === city).forEach(location => {
      this.data.push({
        src: 'assets/img/locations/barcelona.png',
        href: '/apartments',
        location: location,
        num: this.apartmentService.apartmentList.filter(apartment => { return apartment.location === location })
          .reduce((first, next) => { return first + 1 }, 0)
      });
    })

    locations.forEach((location) => {
      this.places.push({ inputValue: location.city, label: location.city });
    });
  }

  ngOnInit(): void {
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
