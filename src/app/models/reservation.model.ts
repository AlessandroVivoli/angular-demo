import {v4 as uuid} from 'uuid';

export class ReservationModel {
    id!: string;
    email!: string;
    accommodationId!: string;
    checkIn!: string;
    checkOut!: string;
    personsCount!: number;
    confirmed!: boolean;

    constructor() {
        this.id = uuid();
    }
}