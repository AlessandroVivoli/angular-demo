import { AccommodationTypeEnum } from "src/app/enums/accommodation-type.enum";

export interface AccommodationModel {
    id: string;
    title: string;
    subtitle: string;
    description: string | null;
    type: AccommodationTypeEnum;
    categorization: number;
    personCount: number;
    imageUrl: string | null;
    freeCancelation: boolean;
    price: number;
    locationID: string;
}
