import { AccomodationTypeEnum } from "src/app/enums/accomodation-type.enum";
import { LocationModel, PostLocationModel } from "./location.model";

export class PostAccomodationModel {
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
    locationID?: string;
    location?: LocationModel | PostLocationModel;
    capacity?: number;
}


export class AccomodationModel extends PostAccomodationModel{
    id!: string;
}

