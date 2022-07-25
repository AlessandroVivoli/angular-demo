import { Component } from '@angular/core';
import { ApartmentListService } from './modules/components/shared/services/apartment-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularDemo';

  constructor(private apartmentService: ApartmentListService) {
  }
}
