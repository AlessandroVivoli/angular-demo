import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	@ViewChild('loginForm') el: ElementRef<HTMLFormElement>;

	email: string = '';

	constructor(private authService: AuthService, private router: Router) {
		if (authService.isLoggedIn()) router.navigate(['']);
	}

	ngOnInit(): void {}

	submit(event: SubmitEvent) {
		if (!this.el.nativeElement.checkValidity()) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			this.authService.login();

			localStorage.setItem('email', this.email);

			location.reload();
		}

		this.el.nativeElement.classList.add('was-validated');
	}
}
