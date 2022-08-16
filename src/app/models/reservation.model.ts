import { AccomodationModel } from "./accomodation.model";

export class ReservationModel {
    id!: string;
    email?: string;
    accomodationId!: string;
    accomodation?: AccomodationModel;
    checkIn?: string;
    checkOut?: string;
    personsCount!: number;
    confirmed!: boolean;
}