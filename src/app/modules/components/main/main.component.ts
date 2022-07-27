import { Component, OnInit } from '@angular/core';
import { Apartment } from '../shared/models/apartment/apartment.model';
import { Location } from '../shared/models/location/location.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  apartments: Apartment[] = [
    { img: 'assets/img/apartments/apartment-1.png', location: new Location('Split', '', ''), name: 'Sugar & Spice Apartments', price: 75, rating: 5 },
    { img: 'assets/img/apartments/apartment-2.png', location: new Location('Saint Topez', '', ''), name: 'Lemon Luxury Apartments', price: 174, rating: 5 },
    { img: 'assets/img/apartments/apartment-3.png', location: new Location('Cancún', '', ''), name: 'Casa Krystal', price: 123, rating: 5 },
    { img: 'assets/img/apartments/apartment-4.png', location: new Location('Phuket', '', ''), name: 'Phuket Kamala Beach Hotel', price: 55, rating: 5 }
  ];

  locations: Location[] = [
    new Location('New York', '', ''),
    new Location('Rome', '', ''),
    new Location('London', '', ''),
    new Location('Tokyo', '', ''),
    new Location('Barcelona', '', ''),
  ]

  constructor() {

  }

  ngOnInit(): void {
  }

}
