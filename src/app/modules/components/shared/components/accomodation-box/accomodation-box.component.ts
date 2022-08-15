import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccomodationModel } from 'src/app/models/accomodation.model';

@Component({
	selector: 'app-accomodation-box',
	templateUrl: './accomodation-box.component.html',
	styleUrls: ['./accomodation-box.component.scss'],
})
export class AccomodationBoxComponent {
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

	onClick() {
		this.accomodationOutput.emit(this.accomodation);
	}
}
