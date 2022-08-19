import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { AccomodationTypeEnum } from 'src/app/enums/accomodation-type.enum';
import { AccomodationModel, PostAccomodationModel } from 'src/app/models/accomodation.model';
import { CustomErrorResponse } from 'src/app/models/custom-error-response.model';
import { GetAccomodation, PostAccomodation, PutAccomodation } from 'src/app/state/accomodations/accomodation.actions';
import { selectAccomodation, selectAccomodationError, selectAccomodationLoading } from 'src/app/state/accomodations/accomodation.selectors';
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
	freeCancellation = new FormControl();

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
	accomodation$: Observable<AccomodationModel | undefined>;

	#sub: Subscription = new Subscription();

	accomodationId: string | null;

	constructor(private store: Store<AppState>, private toast: ToastrService, private activatedRoute: ActivatedRoute, private router: Router) {
		this.accomodationLoading$ = this.store.select(selectAccomodationLoading);
		this.accomodationError$ = this.store.select(selectAccomodationError);
		this.accomodation$ = this.store.select(selectAccomodation);
	}

	ngOnInit(): void {
		this.#sub.add(
			this.activatedRoute.paramMap.subscribe((params) => {
				this.accomodationId = params.get('id');

				if (this.accomodationId) this.store.dispatch(GetAccomodation({ payload: this.accomodationId }));
			})
		);

		this.#sub.add(
			this.accomodation$.subscribe((accomodation) => {
				this.name = new FormControl(accomodation?.title);
				this.shortDesc = new FormControl(accomodation?.shortDescription);
				this.longDesc = new FormControl(accomodation?.description);
				this.categorization = new FormControl(accomodation?.categorization);
				this.type = new FormControl(accomodation?.type);
				this.price = new FormControl(accomodation?.price);
				this.location = new FormControl(accomodation?.location?.name);
				this.postalCode = new FormControl(accomodation?.location?.postalCode);
				this.freeCancellation = new FormControl(accomodation?.freeCancelation);

				let children: HTMLCollection | null = null;
				if (this.starContainer) children = this.starContainer.nativeElement.children;

				if (children)
					for (let i = 0; i < children.length; i++) {
						if (i < this.categorization.value) children.item(children.length - 1 - i)?.classList.add('selected');
						else children.item(children.length - 1 - i)?.classList.remove('selected');
					}
			})
		);
	}

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
		const accomodation = new PostAccomodationModel();

		accomodation.title = this.name.value;
		accomodation.description = this.longDesc.value;
		accomodation.shortDescription = this.shortDesc.value;
		accomodation.type = this.type.value;
		accomodation.categorization = this.categorization.value;
		accomodation.freeCancelation = !!this.freeCancellation.value;
		accomodation.price = this.price.value;
		accomodation.location = { name: this.location.value, postalCode: this.postalCode.value, properties: 1, imageUrl: '' };

		const storage = localStorage.getItem('favorites');
		let favorites: string[] = [];

		if (storage) favorites = JSON.parse(storage);

		localStorage.setItem('favorites', JSON.stringify(favorites));

		this.store.dispatch(PostAccomodation({ payload: accomodation }));

		this.#sub.add(
			this.accomodationLoading$.subscribe((loading) => {
				if (!loading) {
					this.#sub.add(
						this.accomodationError$.subscribe((error) => {
							if (error) this.toast.error(error.statusText);
							else this.toast.success('Successfully added place');
						})
					);
				}
			})
		);
	}

	onSave() {
		const accomodation = new AccomodationModel();
		if (this.accomodationId) accomodation.id = this.accomodationId;
		accomodation.title = this.name.value;
		accomodation.description = this.longDesc.value;
		accomodation.shortDescription = this.shortDesc.value;
		accomodation.type = this.type.value;
		accomodation.categorization = this.categorization.value;
		accomodation.freeCancelation = !!this.freeCancellation.value;
		accomodation.price = this.price.value;
		accomodation.location = { name: this.location.value, postalCode: this.postalCode.value, properties: 1, imageUrl: '' };

		this.store.dispatch(PutAccomodation({ payload: accomodation }));

		this.#sub.add(
			this.accomodationLoading$.subscribe((loading) => {
				if (!loading) {
					this.#sub.add(
						this.accomodationError$.subscribe((error) => {
							if (error) this.toast.error(error.statusText);
							else this.toast.success('Successfully edited place');
						})
					);
				}
			})
		);
	}

	onCancel() {
		this.router.navigate(['/my-places']);
	}
}
