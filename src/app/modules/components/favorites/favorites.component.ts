import { Component, OnInit } from '@angular/core';
import { ApartmentModel } from '../shared/models/apartment/apartment.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  apartments: ApartmentModel[] = [
    new ApartmentModel('Treehouse', 0, {city: 'Hrusice', country: '', img: '', location: '', street: ''}, 0, 'assets/img/apartments/favorite-1.png'),
    new ApartmentModel('Tiny House', 0, {city: 'Hrusice', country: '', img: '', location: '', street: ''}, 0, 'assets/img/apartments/favorite-2.png')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
