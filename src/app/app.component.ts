import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApartmentListService } from './modules/components/shared/services/apartment-list.service';
import { AuthService } from './modules/components/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularDemo';

  isLoggedIn: boolean;

  constructor(
    private apartmentService: ApartmentListService,
    private authService: AuthService,
    private router: Router
  ) {
    this.isLoggedIn = authService.isLoggedIn();

    if (!this.isLoggedIn && location.pathname !== '/login')
      router.navigate(['login']);
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = this.authService.isLoggedIn()

    location.reload();
  }
}
