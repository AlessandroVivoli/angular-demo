import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationModel } from 'src/app/models/location.model';
import { AccommodationModel } from '../../../../../models/accommodation.model';
import { LocationListService } from '../../services/location-list.service';

@Component({
  selector: 'app-accommodation-box',
  templateUrl: './accommodation-box.component.html',
  styleUrls: ['./accommodation-box.component.scss']
})
export class AccommodationBoxComponent implements OnInit {
  @Input() accommodation: AccommodationModel;
  @Input() changeLayout: boolean;
  @Input() href?: string;
  @Input() isFavorite: boolean = false;

  location: LocationModel;

  constructor(private locationService: LocationListService, private router: Router) { }

  ngOnInit(): void {
    this.location = this.locationService.locationList.find(location => location.id === this.accommodation.locationID) as LocationModel;
  }

  onClick() {
    if (this.href)
      this.router.navigateByUrl(this.href);
  }
}
