import { ApartmentDetails } from "./apartment-details.model";
import { Location } from "../location/location.model";

export class Apartment {
    name: string;
    price: number;
    location: Location;
    rating: number;
    img: string;

    constructor(name: string, price: number, location: Location, rating: number, img: string) {
        this.name = name;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.img = img;
    }
}
