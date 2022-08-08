import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccommodationListService } from './modules/components/shared/services/accomodation-list.service';
import { AuthService } from './modules/components/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularDemo';

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout();
    location.reload();
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();

    if (!this.isLoggedIn && location.pathname !== '/login')
      this.router.navigate(['login']);
    else this.router.navigate(['home']);
  }
}
