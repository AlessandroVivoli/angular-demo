import { Component, OnInit } from '@angular/core';
import { Location } from '../shared/models/location/location.model';
import { ApartmentListService } from '../shared/services/apartment-list.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  data: { src: string, href: string, location: Location, num: number }[] = [];


  constructor(private apartmentService: ApartmentListService) {
    const locations = [...new Set(apartmentService.apartmentList.map((apartment) => { return apartment.location }))];
    locations.forEach((location) => {
      this.data.push({
        src: 'assets/img/locations/barcelona.png',
        href: '/apartments',
        location: location,
        num: apartmentService.apartmentList.filter(apartment => { return apartment.location === location })
          .reduce((first, next) => { return first + 1 }, 0)
      });
    });
  }

  ngOnInit(): void {
  }

}
