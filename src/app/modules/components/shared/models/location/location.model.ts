export class Location {
    city: string;
    street: string;
    country: string;
    img: string;

    constructor(city: string, street: string, country: string, img: string) {
        this.street = street;
        this.city = city;
        this.country = country;
        this.img = img;
    }

    get location() {
        return [this.street, this.city, this.country].join(', ');
    }
}
