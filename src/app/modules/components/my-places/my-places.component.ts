import { Component, OnInit } from '@angular/core';
import { AccomodationModel } from 'src/app/models/accomodation.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.scss']
})
export class MyPlacesComponent implements OnInit {

  accomodations: AccomodationModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
