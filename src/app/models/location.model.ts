
export class PostLocationModel {
    name?: string;
    imageUrl?: string;
    postalCode!: number;
    properties!: number;
}

export class LocationModel extends PostLocationModel{
    id!: string;
}
