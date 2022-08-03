import { ApartmentTypeEnum } from "src/app/enums/apartment-type.enum";

export interface AccomodationModel {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    type: ApartmentTypeEnum;
    categorization: number;
    personCount: number;
    imageURL: string;
    freeCancelation: boolean;
    price: number;
    locationId: string;
}
