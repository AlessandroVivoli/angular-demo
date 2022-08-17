import { AccomodationModel } from "./accomodation.model";

export class ReservationModel {
    id!: string;
    email?: string;
    accomodationId!: string;
    accomodation?: AccomodationModel;
    checkIn?: Date;
    checkOut?: Date;
    personsCount!: number;
    confirmed!: boolean;
}