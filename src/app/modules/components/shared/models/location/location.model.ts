export class Location {
    street?: string;
    city: string;
    country?: string;

    constructor(city: string, street?: string, country?: string) {
        this.street = street;
        this.city = city;
        this.country = country;
    }

    get location() {
        return [this.street, this.city, this.country].join(', ');
    }
}
