import { LocationModel } from "../location/location.model";

export class ApartmentModel {
    private static global_id: number = 0;

    id: number;
    name: string;
    price: number;
    location: LocationModel;
    rating: number;
    img: string;

    constructor(name: string, price: number, location: LocationModel, rating: number, img: string, id?: number) {
        if (id && id > ApartmentModel.global_id)
            ApartmentModel.global_id = id;

        this.id = ApartmentModel.global_id++;

        this.name = name;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.img = img;
    }
}
