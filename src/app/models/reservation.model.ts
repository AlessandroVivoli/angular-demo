export interface ReservationModel {
    id: string;
    email: string;
    accomodationId: string;
    checkIn: string;
    checkOut: string;
    personsCount: number;
    confirmed: boolean;
}