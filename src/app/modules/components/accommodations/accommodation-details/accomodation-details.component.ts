import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccommodationTypeEnum } from 'src/app/enums/accommodation-type.enum';
import { LocationModel } from 'src/app/models/location.model';
import { AccommodationModel } from '../../../../models/accommodation.model';
import { AccommodationListService } from '../../shared/services/accomodation-list.service';
import { LocationListService } from '../../shared/services/location-list.service';

@Component({
  selector: 'app-accomodation-details',
  templateUrl: './accomodation-details.component.html',
  styleUrls: ['./accomodation-details.component.scss']
})
export class AccommodationDetailsComponent implements OnInit, OnDestroy {

  accommodation!: AccommodationModel;
  location!: LocationModel;

  AccommodationType = AccommodationTypeEnum;

  private sub: Subscription;
  private id: string;

  constructor(
    private accommodationService: AccommodationListService,
    private locationService: LocationListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    this.accommodation = this.accommodationService.accommodationList.find(accommodation => accommodation.id === this.id) as AccommodationModel;
    this.location = this.locationService.locationList.find(location => location.id === this.accommodation.locationID) as LocationModel;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }

  onBook() {
    this.router.navigate(['book']);
  }
}
