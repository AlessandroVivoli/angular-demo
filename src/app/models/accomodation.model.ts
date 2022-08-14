import { AccomodationTypeEnum } from "src/app/enums/accomodation-type.enum";
import {v4 as uuid} from 'uuid';
import { LocationModel } from "./location.model";

export class AccomodationModel {
    id!: string;
    title!: string;
    subtitle?: string;
    description?: string;
    shortDescription?: string;
    type!: AccomodationTypeEnum;
    categorization!: number;
    personCount?: number;
    imageUrl?: string;
    freeCancelation!: boolean;
    price!: number;
    location!: LocationModel;
    locationID!: string;
    capacity!: number;

    constructor() {
        this.id = uuid();
    }
}
