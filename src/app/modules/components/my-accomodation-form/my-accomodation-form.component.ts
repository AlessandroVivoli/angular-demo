import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { AccomodationTypeEnum } from 'src/app/enums/accomodation-type.enum';
import { AccomodationModel } from 'src/app/models/accomodation.model';
import { CustomErrorResponse } from 'src/app/models/custom-error-response.model';
import { PostAccomodation } from 'src/app/state/accomodations/accomodation.actions';
import { selectAccomodationError, selectAccomodationLoading } from 'src/app/state/accomodations/accomodation.selectors';
import { AppState } from 'src/app/state/app.state';

import * as uuid from 'uuid';

@Component({
	selector: 'app-my-accomodation-form',
	templateUrl: './my-accomodation-form.component.html',
	styleUrls: ['./my-accomodation-form.component.scss']
})
export class MyAccomodationFormComponent implements OnInit, AfterViewInit, OnDestroy {
	name = new FormControl();
	shortDesc = new FormControl();
	longDesc = new FormControl();
	categorization = new FormControl();
	type = new FormControl();
	price = new FormControl();
	location = new FormControl();
	postalCode = new FormControl();
	freeCancellation = new FormControl<boolean>(false);

	@ViewChild('stars')
	starContainer: ElementRef<HTMLDivElement>;

	data: { inputValue: string; label: string }[] = Object.keys(AccomodationTypeEnum)
		.filter((item) => {
			return isNaN(Number(item));
		})
		.map((item) => {
			return { inputValue: item, label: item };
		});

	accomodationLoading$: Observable<boolean>;
	accomodationError$: Observable<CustomErrorResponse | undefined>;

	#sub: Subscription = new Subscription();

	constructor(private store: Store<AppState>, private toast: ToastrService) {
		this.accomodationLoading$ = this.store.select(selectAccomodationLoading);
		this.accomodationError$ = this.store.select(selectAccomodationError);
	}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		const children = this.starContainer.nativeElement.children;

		for (let i = 0; i < children.length; i++)
			(children.item(i) as HTMLButtonElement)!.addEventListener('click', () => {
				this.categorization.setValue(children.length - i);
				for (let i = 0; i < children.length; i++) {
					if (i < this.categorization.value) children.item(children.length - 1 - i)?.classList.add('selected');
					else children.item(children.length - 1 - i)?.classList.remove('selected');
				}
			});
	}

	ngOnDestroy(): void {}

	onSubmit() {
		const accomodation = new AccomodationModel();

		accomodation.id = uuid.v4();
		accomodation.title = this.name.value;
		accomodation.description = this.longDesc.value;
		accomodation.shortDescription = this.shortDesc.value;
		accomodation.type = this.type.value;
		accomodation.categorization = this.categorization.value;
		accomodation.freeCancelation = !!this.freeCancellation.value;
		accomodation.price = this.price.value;
		accomodation.location = { id: uuid.v4(), name: this.location.value, postalCode: this.postalCode.value, properties: 1, imageUrl: '' };
		accomodation.locationID = accomodation.location.id;

		const favorites = JSON.parse(localStorage.getItem('favorites') as string) as string[];

		if (favorites) {
			favorites.push(accomodation.id);
			localStorage.setItem('favorites', JSON.stringify(favorites));
		} else {
      localStorage.setItem('favorites', JSON.stringify([accomodation.id]));
		}

		this.store.dispatch(PostAccomodation({ payload: accomodation }));

		this.#sub.add(
			this.accomodationLoading$.subscribe((loading) => {
				if (!loading) {
					this.accomodationError$.subscribe((error) => {
						if (error) this.toast.error(error.statusText);
						else this.toast.success('Successfully added place');
					});
				}
			})
		);
	}
}
