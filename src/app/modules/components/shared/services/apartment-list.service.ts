import { Injectable } from '@angular/core';
import { ApartmentModel } from '../models/apartment/apartment.model';
import { LocationModel } from '../models/location/location.model';

@Injectable({
  providedIn: 'root'
})
export class ApartmentListService {

  private readonly apartments: ApartmentModel[];

  private readonly locations: LocationModel[] = [
    new LocationModel('New York', '', '', 'assets/img/locations/new-york.png'),
    new LocationModel('Rome', '', '', 'assets/img/locations/rome.png'),
    new LocationModel('London', '', '', 'assets/img/locations/london.png'),
    new LocationModel('Tokyo', '', '', 'assets/img/locations/tokyo.png'),
    new LocationModel('Barcelona', '', '', 'assets/img/locations/barcelona.png'),
  ];

  private readonly accomodationType: { inputValue: string, label: string }[] = [
    { inputValue: 'apartment', label: 'Apartment' },
    { inputValue: 'room', label: 'Room' },
    { inputValue: 'mobile', label: 'Mobile' }
  ];

  constructor() {
    this.apartments = [
      new ApartmentModel('Sugar & Spice Apartments', 75, this.locations[0], 5, 'assets/img/apartments/apartment-1.png'),
      new ApartmentModel('Lemon Luxury Apartments', 174, this.locations[1], 5, 'assets/img/apartments/apartment-2.png'),
      new ApartmentModel('Casa Krystal', 123, this.locations[2], 5, 'assets/img/apartments/apartment-3.png'),
      new ApartmentModel('Phuket Kamala Beach Hotel', 55, this.locations[3], 5, 'assets/img/apartments/apartment-4.png'),
      new ApartmentModel('Expo Hotel', 178, this.locations[3], 5, 'assets/img/apartments/apartment-5.png')
    ];
  }

  get apartmentList() {
    return this.apartments;
  }

  get accomodationTypes() {
    return this.accomodationType;
  }

  addApartments(apartments: ApartmentModel[]) {
    for (const apartment of apartments)
      this.apartments.push(apartment);
  }

  removeApartment(node: ApartmentModel) {
    this.apartments.forEach((apartment, index) => {
      if (apartment === node)
        this.apartments.splice(index, 1);
    });
  }
}
