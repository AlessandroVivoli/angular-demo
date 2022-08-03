import { Injectable } from '@angular/core';
import { LocationModel } from 'src/app/models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationListService {

  private readonly locations: Set<LocationModel>;

  constructor() {
    this.locations = new Set<LocationModel>(
      [
        {
          id: "0f29d778-0592-43cb-a21c-a4aa6a4c7997",
          name: "Vukovar",
          imageUrl: "https://www.dw.com/hr/vukovar-grad-heroj-ali-i-sredstvo-za-ideolo%C5%A1ko-dijeljenje-hrvatske/a-59853062",
          postalCode: 32000
        },
        {
          id: "9544585e-bd71-4a15-9591-67ecc8374e5d",
          name: "Zagreb",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Zagreb_%2829255640143%29.jpg/420px-Zagreb_%2829255640143%29.jpg",
          postalCode: 10000
        },
        {
          id: "e80b2420-69da-4426-83b5-9acdde15a32c",
          name: "Pozega",
          imageUrl: "https://www.pozega.hr/images/stranica/rotate/108.jpg",
          postalCode: 34000
        }
      ] as LocationModel[]
    );
  }

  get locationList() {
    return [...this.locations];
  }

  addLocations(...locations: LocationModel[]) {
    for(const location of locations)
      this.locations.add(location);
  }
  
  removeLocation(node: LocationModel) {
    this.locations.delete(node);
  }
}
