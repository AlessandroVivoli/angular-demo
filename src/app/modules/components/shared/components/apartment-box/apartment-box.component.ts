import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Apartment } from '../../models/apartment/apartment.model';
import { ApartmentListService } from '../../services/apartment-list.service';

@Component({
  selector: 'app-apartment-box',
  templateUrl: './apartment-box.component.html',
  styleUrls: ['./apartment-box.component.scss']
})
export class ApartmentBoxComponent implements OnInit {
  @Input() apartment: Apartment;

  constructor(private apartmentService: ApartmentListService) {
  }

  ngAfterViewInit() {
  }

  ngOnInit(): void {
  }
}
