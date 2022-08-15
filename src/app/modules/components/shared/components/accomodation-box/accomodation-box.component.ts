import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AccomodationModel } from 'src/app/models/accomodation.model';
import { LocationModel } from 'src/app/models/location.model';
import { AppState } from 'src/app/state/app.state';
import { GetLocation } from 'src/app/state/location/location.actions';
import { selectOneLocation } from 'src/app/state/location/location.selectors';

@Component({
	selector: 'app-accomodation-box',
	templateUrl: './accomodation-box.component.html',
	styleUrls: ['./accomodation-box.component.scss']
})
export class AccomodationBoxComponent implements OnInit {
	@Input() accomodation: AccomodationModel;
	@Input() changeLayout: boolean;
	@Input() href?: string = undefined;
	@Input() isFavorite: boolean = false;
	@Input() isReservation: boolean = false;
	@Input() checkIn?: string;
	@Input() checkOut?: string;
	@Input() routerLink: string | any[] | null | undefined;
	@Input() queryParams: any;

	@Output('OnClick')
	accomodationOutput: EventEmitter<AccomodationModel> = new EventEmitter();

	location$: Observable<LocationModel | undefined>;

	constructor(private store: Store<AppState>) {
		this.location$ = this.store.select(selectOneLocation);
	}

	ngOnInit(): void {
		if (!this.accomodation.location && this.accomodation.locationID) this.store.dispatch(GetLocation({ payload: this.accomodation.locationID }));
	}

	onClick() {
		this.accomodationOutput.emit(this.accomodation);
	}
}
