import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AccomodationModel } from '../../../../../models/apartment/accomodation.model';
import { ApartmentListService } from '../../services/apartment-list.service';

@Component({
  selector: 'app-apartment-box',
  templateUrl: './apartment-box.component.html',
  styleUrls: ['./apartment-box.component.scss']
})
export class ApartmentBoxComponent implements OnInit {
  @Input() apartment: AccomodationModel;
  @Input() changeLayout: boolean;
  @Input() href?: string;
  @Input() isFavorite: boolean = false;

  constructor(private apartmentService: ApartmentListService, private router: Router) {
  }

  ngAfterViewInit() {
  }

  ngOnInit(): void {
  }

  onClick() {
    if (this.href)
      this.router.navigateByUrl(this.href);
  }
}
