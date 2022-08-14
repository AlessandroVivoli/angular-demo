import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccomodationTypeEnum } from 'src/app/enums/accomodation-type.enum';
import { AccomodationModel } from 'src/app/models/accomodation.model';
import { LocationModel } from 'src/app/models/location.model';
import { AccomodationListService } from 'src/app/services/accomodation-list.service';
import { LocationListService } from 'src/app/services/location-list.service';

@Component({
  selector: 'app-accomodation-details',
  templateUrl: './accomodation-details.component.html',
  styleUrls: ['./accomodation-details.component.scss']
})
export class AccomodationDetailsComponent implements OnInit, OnDestroy {

  accomodation!: AccomodationModel;
  location!: LocationModel;

  AccomodationType = AccomodationTypeEnum;

  #sub: Subscription = new Subscription();
  private id: string;

  constructor(
    private accomodationService: AccomodationListService,
    private locationService: LocationListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.#sub.add(
      this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
      })
    );

    this.accomodation = this.accomodationService.accomodationList.find(accomodation => accomodation.id === this.id) as AccomodationModel;
    this.location = this.locationService.locationList.find(location => location.id === this.accomodation.locationID) as LocationModel;
  }

  ngOnDestroy(): void {
    this.#sub.unsubscribe();
  }

  onBook() {
    this.router.navigateByUrl(`accomodations/${this.id}/book`);
  }
}
