import { Injectable } from '@angular/core';
import { AccommodationTypeEnum } from 'src/app/enums/accommodation-type.enum';
import { AccommodationModel as AccommodationModel } from '../../../../models/accommodation.model';

@Injectable({
  providedIn: 'root'
})
export class AccommodationListService {

  private readonly accommodations: Set<AccommodationModel>;

  constructor() {
    this.accommodations = new Set<AccommodationModel>(
      [
        {
          id: "1c0a2708-5f22-4797-88bd-ab81d64e02b1",
          title: "Pozega Resort",
          subtitle: "Pozega Sport",
          description: null,
          type: AccommodationTypeEnum.Suite,
          categorization: 3,
          personCount: 4,
          imageUrl: null,
          freeCancelation: true,
          price: 130,
          locationID: "e80b2420-69da-4426-83b5-9acdde15a32c"
        },
        {
          id: "28536d76-65e3-4be1-b6e2-89d04a915582",
          title: "Best htel in Zagreb",
          subtitle: "Zagreb Hilton",
          description: null,
          type: AccommodationTypeEnum.Suite,
          categorization: 3,
          personCount: 4,
          imageUrl: null,
          freeCancelation: true,
          price: 130,
          locationID: "e80b2420-69da-4426-83b5-9acdde15a32c"
        },
        {
          id: "320716f5-2042-4310-9276-690fd8c7f1a3",
          title: "Ibis Resort since 1999",
          subtitle: "Zagreb Ibis",
          description: null,
          type: AccommodationTypeEnum.Room,
          categorization: 3,
          personCount: 4,
          imageUrl: null,
          freeCancelation: true,
          price: 130,
          locationID: "9544585e-bd71-4a15-9591-67ecc8374e5d"
        },
        {
          id: "51d94ae5-5ff5-4c08-8871-b3a811990584",
          title: "Zagreb Resort",
          subtitle: "Zagreb Sport",
          description: null,
          type: AccommodationTypeEnum.Suite,
          categorization: 3,
          personCount: 4,
          imageUrl: null,
          freeCancelation: true,
          price: 130,
          locationID: "9544585e-bd71-4a15-9591-67ecc8374e5d"
        },
        {
          id: "5605f001-22a3-4b3b-9a9c-0eb54c8bedbf",
          title: "New Hotel in Center",
          subtitle: "Zagreb Inn",
          description: null,
          type: AccommodationTypeEnum.Suite,
          categorization: 3,
          personCount: 4,
          imageUrl: null,
          freeCancelation: true,
          price: 130,
          locationID: "9544585e-bd71-4a15-9591-67ecc8374e5d"
        },
        {
          id: "6e8b3eba-48ef-48a4-8631-7dd39839425e",
          title: "Mobile House Blue",
          subtitle: "mobile house Red",
          description: null,
          type: AccommodationTypeEnum.MobileHome,
          categorization: 3,
          personCount: 4,
          imageUrl: null,
          freeCancelation: true,
          price: 100,
          locationID: "0f29d778-0592-43cb-a21c-a4aa6a4c7997"
        },
        {
          id: "83aff79b-4a25-4131-8a1f-a3ed581891e3",
          title: "Best htel in Zagreb",
          subtitle: "Zagreb Hilton",
          description: null,
          type: AccommodationTypeEnum.Suite,
          categorization: 3,
          personCount: 4,
          imageUrl: null,
          freeCancelation: true,
          price: 130,
          locationID: "e80b2420-69da-4426-83b5-9acdde15a32c"
        },
        {
          id: "8822d26b-02cc-4882-8dbd-83406fb33260",
          title: "Pozega Resort since 1999",
          subtitle: "Pozega Resort",
          description: null,
          type: AccommodationTypeEnum.Suite,
          categorization: 3,
          personCount: 4,
          imageUrl: null,
          freeCancelation: true,
          price: 130,
          locationID: "e80b2420-69da-4426-83b5-9acdde15a32c"
        },
        {
          id: "b292d771-b78a-4e36-b889-ec783846b4c8",
          title: "Zagreb Resort since 1999",
          subtitle: "Zagreb Resort",
          description: null,
          type: AccommodationTypeEnum.Suite,
          categorization: 3,
          personCount: 4,
          imageUrl: null,
          freeCancelation: true,
          price: 130,
          locationID: "9544585e-bd71-4a15-9591-67ecc8374e5d"
        },
        {
          id: "ca41fcd0-2474-48e9-b908-2160841179e9",
          title: "Best Mobile House Inn",
          subtitle: "Best mobile house",
          description: null,
          type: AccommodationTypeEnum.MobileHome,
          categorization: 3,
          personCount: 4,
          imageUrl: null,
          freeCancelation: true,
          price: 100,
          locationID: "0f29d778-0592-43cb-a21c-a4aa6a4c7997"
        }
      ] as AccommodationModel[]
    );
  }

  get accommodationList() {
    return [...this.accommodations];
  }

  addAccommodations(...accommodations: AccommodationModel[]) {
    for (const accommodation of accommodations)
      this.accommodations.add(accommodation);
  }

  removeAccomodation(node: AccommodationModel) {
    this.accommodations.delete(node);
  }
}
