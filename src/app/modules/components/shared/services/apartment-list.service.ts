import { Injectable } from '@angular/core';
import { Apartment } from '../models/apartment/apartment.model';
import { Location } from '../models/location/location.model';

@Injectable({
  providedIn: 'root'
})
export class ApartmentListService {

  private apartments: Apartment[];

  private locations: Location[] = [
    new Location('New York', '', '', 'assets/img/locations/new-york.png'),
    new Location('Rome', '', '', 'assets/img/locations/rome.png'),
    new Location('London', '', '', 'assets/img/locations/london.png'),
    new Location('Tokyo', '', '', 'assets/img/locations/tokyo.png'),
    new Location('Barcelona', '', '', 'assets/img/locations/barcelona.png'),
  ]

  constructor() {
    this.apartments = [
      { img: 'assets/img/apartments/apartment-1.png', location: this.locations[0], name: 'Sugar & Spice Apartments', price: 75, rating: 5 },
      { img: 'assets/img/apartments/apartment-2.png', location: this.locations[1], name: 'Lemon Luxury Apartments', price: 174, rating: 5 },
      { img: 'assets/img/apartments/apartment-3.png', location: this.locations[2], name: 'Casa Krystal', price: 123, rating: 5 },
      { img: 'assets/img/apartments/apartment-4.png', location: this.locations[3], name: 'Phuket Kamala Beach Hotel', price: 55, rating: 5 },
      { img: 'assets/img/apartments/apartment-5.png', location: this.locations[4], name: 'Expo Hotel', price: 178, rating: 5 }
    ];
  }

  get apartmentList() {
    return this.apartments;
  }

  addApartments(apartments: Apartment[]) {
    for (const apartment of apartments)
      this.apartments.push(apartment);
  }

  removeApartment(node: Apartment) {
    this.apartments.forEach((apartment, index) => {
      if (apartment === node)
        this.apartments.splice(index, 1);
    });
  }
}
