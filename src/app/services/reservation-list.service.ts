import { Injectable } from '@angular/core';
import { ReservationModel } from 'src/app/models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationListService {

  private readonly favorites: Set<ReservationModel>;

  constructor() {
    this.favorites = new Set(JSON.parse(localStorage.getItem('reservation') as string));
  }

  public addReservation(reservation: ReservationModel) {
    this.favorites.add(reservation);
  }

  get reservationList() {
    return [...this.favorites];
  }
}
