export class LocationModel {
    name: string;
    postalCode: string;

    constructor(name: string, postalCode: string) {
        this.name = name;
        this.postalCode = postalCode;
    }

    get toString() {
        return [this.postalCode, this.name].join(' ');
    }
}
