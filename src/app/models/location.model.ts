import {v4 as uuid} from 'uuid';

export class LocationModel {
    id!: string;
    name!: string;
    postalCode!: number;
    imageUrl!: string;

    constructor() {
        this.id = uuid();
    }
}
