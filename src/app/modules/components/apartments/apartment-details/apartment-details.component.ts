import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApartmentModel } from '../../shared/models/apartment/apartment.model';
import { ApartmentListService } from '../../shared/services/apartment-list.service';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.scss']
})
export class ApartmentDetailsComponent implements OnInit, OnDestroy {

  apartment: ApartmentModel;

  private sub: Subscription;
  private id: number;

  constructor(private activatedRoute: ActivatedRoute, private apartmentService: ApartmentListService) { 
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    this.apartment = this.apartmentService.apartmentList.find(apartment => apartment.id == this.id) as ApartmentModel;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }
}
