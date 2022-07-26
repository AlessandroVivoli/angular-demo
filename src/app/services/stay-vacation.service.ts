import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AccomodationModel, PostAccomodationModel } from '../models/accomodation.model';
import { LocationModel } from '../models/location.model';
import { ReservationModel } from '../models/reservation.model';

@Injectable({
	providedIn: 'root'
})
export class StayVacationService {
	constructor(private http: HttpClient) {}

	public getAccommodations(): Observable<AccomodationModel[]> {
		return this.http.get<AccomodationModel[]>('/api/Accomodations');
	}

	public postAccommodation(payload: PostAccomodationModel) {
		return this.http.post('/api/Accomodations', payload);
	}

	public getRecommendations(): Observable<AccomodationModel[]> {
		return this.http.get<AccomodationModel[]>('/api/Accomodations/recommendation');
	}

	public getAccommodationsFromLocation(payload: string): Observable<AccomodationModel[]> {
		return this.http.get<AccomodationModel[]>(`/api/Accomodations/location`, {
			params: {
				locationId: payload
			}
		});
	}

	public getAccommodation(payload: string): Observable<AccomodationModel> {
		return this.http.get<AccomodationModel>(`/api/Accomodations/${payload}`);
	}

	public deleteAccommodation(payload: string) {
		return this.http.delete(`/api/Accomodations/${payload}`);
	}

	public putAccommodation(payload: AccomodationModel) {
		return this.http.put(`/api/Accomodations/${payload.id}`, payload);
	}

	public getLocations(): Observable<LocationModel[]> {
		return this.http.get<LocationModel[]>('/api/Location');
	}

	public getLocation(payload: string): Observable<LocationModel | undefined> {
		return this.http.get<LocationModel[]>('/api/Location').pipe(
			map((locations) => {
				return locations.find((location) => location.id === payload);
			})
		);
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
