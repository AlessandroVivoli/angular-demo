import { Component, OnInit } from '@angular/core';
import { LocationModel } from 'src/app/models/location.model';
import { AccommodationModel } from '../../../models/accommodation.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  accommodations: AccommodationModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
