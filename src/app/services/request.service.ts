import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccommodationModel } from '../models/accommodation.model';
import { LocationModel } from '../models/location.model';
import { ReservationModel } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  public getAccommodations(): Observable<AccommodationModel[]> {
    return this.http.get<AccommodationModel[]>('/api/Accomodationa');
  }

  public postAccommodation(payload: AccommodationModel) {
    return this.http.post('/api/Accomodations', payload);
  }

  public getRecommendations(): Observable<AccommodationModel[]> {
    return this.http.get<AccommodationModel[]>('/api/Accomodations/recommendation');
  }

  public getAccommodationsFromLocation(payload: string): Observable<AccommodationModel[]> {
    return this.http.get<AccommodationModel[]>(`/api/Accomodation/${payload}`);
  }

  public getAccommodation(payload: string): Observable<AccommodationModel> {
    return this.http.get<AccommodationModel>(`/api/Accomodations/${payload}`)
  }

  public deleteAccommodation(payload: string) {
    return this.http.delete(`/api/Accomodations/${payload}`);
  }

  public putAccommodation(payload: AccommodationModel) {
    return this.http.put(`/api/Accomodations/${payload.id}`, payload);
  }

  public getLocations(): Observable<LocationModel[]> {
    return this.http.get<LocationModel[]>('/api/Location');
  }

  public putLocation(payload: LocationModel) {
    return this.http.put(`/api/Location/${payload.id}`, payload);
  }

  public getReservations(): Observable<ReservationModel[]> {
    return this.http.get<ReservationModel[]>('/api/Reservation');
  }

  public postReservation(payload: ReservationModel) {
    return this.http.post('/api/Reservation', payload);
  }

  public getReservation(payload: string): Observable<ReservationModel> {
    return this.http.get<ReservationModel>(`/api/Reservation/${payload}`);
  }

  public deleteReservation(payload: string) {
    return this.http.delete(`/api/Reservation/${payload}`);
  }

  public putReservation(payload: ReservationModel) {
    return this.http.put(`/api/Reservation/${payload.id}`, payload);
  }

  public confirmReservation(payload: string) {
    return this.http.put<ReservationModel>(`/api/Reservation/confirm/${payload}`, null);
  }
}
