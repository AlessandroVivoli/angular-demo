import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AccomodationModel } from 'src/app/models/accomodation.model';
import { CustomErrorResponse } from 'src/app/models/custom-error-response.model';
import { GetAccomodations } from 'src/app/state/accomodations/accomodation.actions';
import { selectAccomodationError, selectAccomodationLoading, selectAllAccomodations } from 'src/app/state/accomodations/accomodation.selectors';
import { AppState } from 'src/app/state/app.state';
import { DeletePopupComponent } from '../shared/components/delete-popup/delete-popup.component';

@Component({
	selector: 'app-favorites',
	templateUrl: './my-places.component.html',
	styleUrls: ['./my-places.component.scss']
})
export class MyPlacesComponent implements OnInit, OnDestroy {
	accomodations$: Observable<AccomodationModel[]>;
	accomodationsLoading$: Observable<boolean>;
	accomodationsError$: Observable<CustomErrorResponse | undefined>;

	favoriteAccomodations: AccomodationModel[] = [];

  @ViewChild(DeletePopupComponent) popup: DeletePopupComponent;

	#sub: Subscription = new Subscription();

	constructor(private store: Store<AppState>, private router: Router) {
		this.accomodations$ = this.store.select(selectAllAccomodations);
		this.accomodationsLoading$ = this.store.select(selectAccomodationLoading);
		this.accomodationsError$ = this.store.select(selectAccomodationError);
	}

	ngOnInit(): void {
		this.store.dispatch(GetAccomodations());

		this.#sub.add(
			this.accomodations$.subscribe((accomodations) => {
				const favorites = localStorage.getItem('favorites');
				if (favorites)
					this.favoriteAccomodations = accomodations.filter((accomodation) => accomodation.title && (JSON.parse(favorites) as string[]).includes(accomodation.title));
			})
		);
	}

	ngOnDestroy(): void {
		this.#sub.unsubscribe();
	}

  deleteClicked(accomodaton: AccomodationModel) {
    this.popup.show(accomodaton);
  }

  editClicked(accomodation: AccomodationModel) {
	this.router.navigate(['/edit', accomodation.id])
  }
}
