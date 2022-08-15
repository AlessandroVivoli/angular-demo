import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, Observable, Subscription } from 'rxjs';
import { CustomErrorResponse } from 'src/app/models/custom-error-response.model';
import { LocationModel } from 'src/app/models/location.model';
import { AppState } from 'src/app/state/app.state';
import { GetLocations } from 'src/app/state/locations/locations.actions';
import { selectAllLocations, selectLocationsError, selectLocationsLoading } from 'src/app/state/locations/locations.selectors';

@Component({
	selector: 'app-locations',
	templateUrl: './locations.component.html',
	styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit, OnDestroy {
	places: { inputValue: string; label: string }[] = [];

	city = new FormControl('');

	@ViewChild('submit') button: ElementRef<HTMLButtonElement>;

	#sub: Subscription = new Subscription();

  locations: LocationModel[] = [];

	locations$: Observable<LocationModel[]>;
	locationsLoading$: Observable<boolean>;
	locationsError$: Observable<CustomErrorResponse | undefined>;

	constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute, private router: Router) {
    this.locations$ = this.store.select(selectAllLocations);
    this.locationsLoading$ = this.store.select(selectLocationsLoading);
    this.locationsError$ = this.store.select(selectLocationsError);
  }

	ngOnInit(): void {
		let city: string = '';

    this.store.dispatch(GetLocations());

		this.#sub.add(
			this.activatedRoute.queryParams.subscribe((params) => {
				city = params['city'];
			})
		);

    this.#sub.add(
      this.locations$.subscribe(locations => {
        this.places = locations.map(location => ({inputValue: location.name, label: location.name}))
        this.locations = locations.filter(location => (location.name === city || city === '' || !city));
      })
    )

		this.city.setValue(city);

		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
		this.router.onSameUrlNavigation = 'reload';
	}

	ngOnDestroy(): void {
		this.#sub.unsubscribe();
	}

	onSubmit() {
		this.router.navigate(['/locations'], { queryParams: { city: this.city.value } });
	}

	onSelectChange(event: Event) {
		const parentDisplay = window.getComputedStyle(this.button.nativeElement.parentElement as HTMLDivElement).display;

		if (parentDisplay === 'none') this.router.navigate(['/locations'], { queryParams: { city: this.city.value } });
	}
}
