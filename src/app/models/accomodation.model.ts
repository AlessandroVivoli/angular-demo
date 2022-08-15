import { AccomodationTypeEnum } from "src/app/enums/accomodation-type.enum";
import { LocationModel } from "./location.model";

export class AccomodationModel {
    id!: string;
    title?: string;
    subtitle?: string;
    description?: string;
    shortDescription?: string;
    type!: AccomodationTypeEnum;
    categorization?: number;
    personCount?: number;
    imageUrl?: string;
    freeCancelation!: boolean;
    price!: number;
    location!: LocationModel;
    locationID?: string;
    capacity?: number;
}
