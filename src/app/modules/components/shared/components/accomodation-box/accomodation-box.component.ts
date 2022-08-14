import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LocationModel } from 'src/app/models/location.model';
import { AccomodationModel } from '../../../../../models/accomodation.model';
import { LocationListService } from '../../../../../services/location-list.service';

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

  location: LocationModel;

 
  constructor(private locationService: LocationListService, private router: Router) { }

  ngOnInit(): void {
    this.location = this.locationService.locationList.find(location => location.id === this.accomodation.locationID) as LocationModel;
  }

  onClick() {
    this.accomodationOutput.emit(this.accomodation);
  }
}
