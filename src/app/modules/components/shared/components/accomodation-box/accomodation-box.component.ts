import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Observable, of, Subscription } from 'rxjs';
import { AccomodationModel } from 'src/app/models/accomodation.model';
import { LocationModel } from 'src/app/models/location.model';
import { AppState } from 'src/app/state/app.state';
import { GetLocation } from 'src/app/state/location/location.actions';
import { selectOneLocation } from 'src/app/state/location/location.selectors';
import { GetLocations } from 'src/app/state/locations/locations.actions';
import { selectAllLocations, selectLocations } from 'src/app/state/locations/locations.selectors';

@Component({
	selector: 'app-accomodation-box',
	templateUrl: './accomodation-box.component.html',
	styleUrls: ['./accomodation-box.component.scss']
})
export class AccomodationBoxComponent implements OnInit, OnDestroy {
	@Input() accomodation: AccomodationModel;
	@Input() changeLayout: boolean;
	@Input() href?: string = undefined;
	@Input() isFavorite: boolean = false;
	@Input() isReservation: boolean = false;
	@Input() checkIn?: string;
	@Input() checkOut?: string;
	@Input() routerLink: string | any[] | null | undefined;
	@Input() queryParams: any;
	@Input() noRedirect: boolean = false;

	@Output('OnClick')
	accomodationOutput: EventEmitter<AccomodationModel> = new EventEmitter();

	@Output('OnDelete')
	accomodationDeleteOutput: EventEmitter<AccomodationModel> = new EventEmitter();

	@Output('OnEdit')
	accomodationEditOutput: EventEmitter<AccomodationModel> = new EventEmitter();

	locations$: Observable<LocationModel[]>;
	location$: Observable<LocationModel>;

	#sub: Subscription = new Subscription();

	constructor(private store: Store<AppState>) {
		this.locations$ = this.store.select(selectAllLocations);
	}

	ngOnInit(): void {
		if (!this.accomodation.location) {
			this.store.dispatch(GetLocations());
			this.#sub.add(
				this.locations$.subscribe((locations) => {
					this.location$ = of(locations.find((location) => location.id === this.accomodation.locationID) as LocationModel);
				})
			);
		}

		if (!this.accomodation.location && !!this.accomodation.locationID) this.store.dispatch(GetLocation({ payload: this.accomodation.locationID }));
	}

	ngOnDestroy(): void {
		this.#sub.unsubscribe;
	}

	onClick() {
		this.accomodationOutput.emit(this.accomodation);
	}

	onClickDelete() {
		this.accomodationDeleteOutput.emit(this.accomodation);
	}

	onClickEdit() {
		this.accomodationEditOutput.emit(this.accomodation);
	}
}
