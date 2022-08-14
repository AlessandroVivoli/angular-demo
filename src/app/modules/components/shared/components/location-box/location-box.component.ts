import { LocationModel } from 'src/app/models/location.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-box',
  templateUrl: './location-box.component.html',
  styleUrls: ['./location-box.component.scss']
})
export class LocationBoxComponent implements OnInit {
  @Input() location: LocationModel;
  @Input('property-num') num: number;
  @Input('href') link?: string;
  @Input() data: object;
  @Input() routerLink: string | any[] | null | undefined;
  @Input() queryParams: any;

  constructor() { }

  ngOnInit(): void {
  }

}
