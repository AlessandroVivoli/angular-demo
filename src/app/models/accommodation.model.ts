import { AccommodationTypeEnum } from "src/app/enums/accommodation-type.enum";
import {v4 as uuid} from 'uuid';

export class AccommodationModel {
    id!: string;
    title!: string;
    subtitle!: string;
    description!: string | null;
    type!: AccommodationTypeEnum;
    categorization!: number;
    personCount!: number;
    imageUrl!: string | null;
    freeCancelation!: boolean;
    price!: number;
    locationID!: string;

    constructor() {
        this.id = uuid();
    }
}
