import { Component, OnInit } from '@angular/core';
import { LocationModel } from 'src/app/models/location.model';
import { AccommodationModel } from '../../../models/accommodation.model';
import { AccommodationListService } from '../shared/services/accomodation-list.service';
import { ReservationListService } from '../shared/services/reservation-list.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  accommodations: AccommodationModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
