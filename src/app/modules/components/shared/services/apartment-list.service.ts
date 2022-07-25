import { Injectable } from '@angular/core';
import { Apartment } from '../models/apartment/apartment.model';

@Injectable({
  providedIn: 'root'
})
export class ApartmentListService {

  private apartments: Apartment[];
  private favorites: Apartment[];

  constructor() {
    this.apartments = [];
    this.favorites = [];
  }

  get apartmentList() {
    return this.apartments;
  }

  get favoriteList() {
    return this.favorites;
  }

  addApartments(apartments: Apartment[]) {
    for (const apartment of apartments)
      this.apartments.push(apartment);
  }

  addFavorites(favorites: Apartment[]) {
    for (const favorite of favorites)
      this.favorites.push(favorite);
  }

  removeFavorite(node: Apartment) {
    this.favorites.forEach((apartment, index) => {
      if (apartment === node) {
        this.favorites.splice(index, 1);
        return;
      }
    });
  }

  removeApartment(node: Apartment) {
    this.apartments.forEach((apartment, index) => {
      if (apartment === node) {
        this.removeFavorite(node);
        this.apartments.splice(index, 1);
      }
    });
  }

  isFavorite(apartment: Apartment): boolean {
    return !!this.favorites.find(ap => ap === apartment);
  }
}
