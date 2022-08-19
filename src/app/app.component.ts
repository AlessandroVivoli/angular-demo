import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

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

    if(this.isLoggedIn)
      this.router.navigate(['/home']);
  }
}
