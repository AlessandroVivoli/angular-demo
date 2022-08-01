import { LocationModel } from "../location/location.model";
import { AccomodationDetailsModel } from "./accomodation-details.model";

export class AccomodationModel {
    private static global_id: number = 0;

    id: number;
    name: string;
    price: number;
    location: LocationModel;
    rating: number;
    img: string;
    apartmentDetails?: AccomodationDetailsModel;

    constructor(name: string, price: number, location: LocationModel, rating: number, img: string, apartmentDetails?: AccomodationDetailsModel, id?: number) {
        if (id && id > AccomodationModel.global_id)
            AccomodationModel.global_id = id;

        this.id = AccomodationModel.global_id++;

        this.name = name;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.img = img;
        this.apartmentDetails = apartmentDetails;
    }
}
