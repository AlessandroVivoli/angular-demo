import { Component, OnInit } from '@angular/core';
import { Apartment } from '../shared/models/apartment/apartment.model';
import { Location } from '../shared/models/location/location.model';
import { ApartmentListService } from '../shared/services/apartment-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  locations: Location[] = [];
  apartments: Apartment[] = [];

  constructor(private apartmentService: ApartmentListService) {
    this.apartments = apartmentService.apartmentList;
    this.locations = [...new Set(this.apartments.map(apartment => { return apartment.location }))];
  }

  ngOnInit(): void {
  }

}
