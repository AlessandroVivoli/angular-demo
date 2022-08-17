import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, RouteReuseStrategy, RouterState } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { AccomodationModel } from 'src/app/models/accomodation.model';
import { CustomErrorResponse } from 'src/app/models/custom-error-response.model';
import { DeleteAccomodation } from 'src/app/state/accomodations/accomodation.actions';
import { selectAccomodationError, selectAccomodationLoading } from 'src/app/state/accomodations/accomodation.selectors';
import { AppState } from 'src/app/state/app.state';

declare var $: any;

@Component({
	selector: 'app-delete-popup',
	templateUrl: './delete-popup.component.html',
	styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent implements OnInit, OnDestroy {
	accomodation: AccomodationModel;

	acomodationLoading$: Observable<boolean>;
	accomodationError$: Observable<CustomErrorResponse | undefined>;

	#sub: Subscription = new Subscription();

	constructor(private store: Store<AppState>, private router: Router, private toast: ToastrService) {
		this.acomodationLoading$ = this.store.select(selectAccomodationLoading);
		this.accomodationError$ = this.store.select(selectAccomodationError);
	}

	ngOnInit(): void {
		this.router.onSameUrlNavigation = 'reload';
		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
	}

	ngOnDestroy(): void {
		this.#sub.unsubscribe();
	}

	public show(accomodation: AccomodationModel) {
    this.accomodation = accomodation;

    $('#deleteModal').modal('show');
  }

	delete() {
		if (this.accomodation) {
			this.store.dispatch(DeleteAccomodation({ payload: this.accomodation.id }));

			this.#sub.add(
				this.acomodationLoading$.subscribe((loading) => {
					if (!loading)
						this.#sub.add(
							this.accomodationError$.subscribe((error) => {
								if (!error) {
									const currentUrl = this.router.url;

									this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
										this.router.navigate([currentUrl]);
									});
								} else this.toast.error(error.statusText);
							})
						);
				})
			);

      $('#deleteModal').modal('hide');
		}
	}
}
