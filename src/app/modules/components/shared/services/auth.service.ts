import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  isLoggedIn() {
    return (localStorage.getItem('isLoggedIn') !== null && localStorage.getItem('isLoggedIn') === 'true');
  }

  login() {
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('email');
  }
}
