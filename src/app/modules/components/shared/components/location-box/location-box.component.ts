import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../../models/location/location.model';

@Component({
  selector: 'app-location-box',
  templateUrl: './location-box.component.html',
  styleUrls: ['./location-box.component.scss']
})
export class LocationBoxComponent implements OnInit {
  @Input() src: string;
  @Input() location: Location;
  @Input('property-num') num: number;
  @Input('href') link: string;

  constructor() { }

  ngOnInit(): void {
  }

}
