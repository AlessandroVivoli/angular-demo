import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AccomodationModel } from '../../../models/apartment/accomodation.model';
import { ApartmentListService } from '../shared/services/apartment-list.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit, OnDestroy {

  city: string;

  checkIn = new FormControl('');
  checkOut = new FormControl('');
  guests = new FormControl<number>(0);
  accomodationType = new FormControl('');
  
  apartments: AccomodationModel[] = [];

  data: {inputValue: string, label: string}[];

  private sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private apartmentService: ApartmentListService) {
    this.data = apartmentService.accomodationTypes;
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.queryParams.subscribe(params => {
      this.city = params['city'];
      this.checkIn.setValue(params['check-in']);
      this.checkOut.setValue(params['check-out']);
      this.guests.setValue(params['guests']);
      this.accomodationType.setValue(params['type']);
    });

    this.apartments = this.apartmentService.apartmentList.filter(apartment => {
      if(!this.city || apartment.location.name === this.city) return true;

      return false;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
