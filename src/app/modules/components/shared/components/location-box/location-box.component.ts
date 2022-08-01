import { Component, Input, OnInit } from '@angular/core';
import { LocationModel } from '../../../../../models/location/location.model';

@Component({
  selector: 'app-location-box',
  templateUrl: './location-box.component.html',
  styleUrls: ['./location-box.component.scss']
})
export class LocationBoxComponent implements OnInit {
  @Input() location: LocationModel;
  @Input('property-num') num: number;
  @Input('href') link: string;
  @Input() data: object;

  constructor() { }

  ngOnInit(): void {
  }

}
