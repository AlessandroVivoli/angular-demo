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
      new ApartmentModel('Sugar & Spice Apartments', 75, this.locations[0], 5, 'assets/img/apartments/apartment-1.png', {
        summary: `
        <p>This property is 3 minutes walk from the beach. Overlooking Mykonos Windmills, the Poseidon Hotel Suites is only 50 m from Megali Ammos Beach. The 3-star hotel offers a freshwater pool, and bright rooms with air conditioning and fan.</p>
        <p>Each of the Cycladic rooms opens to a private balcony with across to Mykonos Town, the sea and Delos. A fridge, satellite TV and safe are standard.</p>
        <p>Free two-way transfer from the airport or port is offered. Poseidon provides free Wi-Fi in public areas, and on-site parking is also free. Guests can hire Poseidon’s motor yacht and discover the magnificent beaches of Mykonos.</p>
        <p>At the breakfast room and its cool patio, guests can taste homemade local delicacies, fresh fruit and good quality coffee. The Alley Bay serves exclusive cocktails, a few steps from the Poseidon.</p>
        <p>The Poseidon is just 200 m from the famous Mykonos Windmills. Right next to the hotel, guests will find small sandy coves and a pathway that leads to the picturesque chapel of Agios Charalambis.</p>
        <p>This is our guests' favourite part of Mýkonos City, according to independent reviews. Couples particularly like the location — they rated it 9.6 for a two-person trip.</p>
        `,
        cancellationFee: 0,
        numberOfGuests: 2,
        accomodationType: 'Room',
        price: 500,
        postalCode: 10001,
        img: 'assets/img/apartments/headings/apartment-1.png'
      }),
      new ApartmentModel('Lemon Luxury Apartments', 174, this.locations[1], 5, 'assets/img/apartments/apartment-2.png'),
      new ApartmentModel('Casa Krystal', 123, this.locations[2], 5, 'assets/img/apartments/apartment-3.png'),
      new ApartmentModel('Phuket Kamala Beach Hotel', 55, this.locations[3], 5, 'assets/img/apartments/apartment-4.png'),
      new ApartmentModel('Expo Hotel', 178, this.locations[4], 5, 'assets/img/apartments/apartment-5.png')
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
