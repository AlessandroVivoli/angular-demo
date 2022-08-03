export interface ReservationModel {
    id: string;
    email: string;
    accommodationId: string;
    checkIn: string;
    checkOut: string;
    personsCount: number;
    confirmed: boolean;
}