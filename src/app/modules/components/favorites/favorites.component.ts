import { Component, OnInit } from '@angular/core';
import { LocationModel } from 'src/app/models/location/location.model';
import { AccomodationModel } from '../../../models/apartment/accomodation.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  private readonly hrusice = new LocationModel('Hrusice', '');

  apartments: AccomodationModel[] = [
    new AccomodationModel('Treehouse', 0, this.hrusice, 0, 'assets/img/apartments/favorite-1.png'),
    new AccomodationModel('Tiny House', 0, this.hrusice, 0, 'assets/img/apartments/favorite-2.png')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
