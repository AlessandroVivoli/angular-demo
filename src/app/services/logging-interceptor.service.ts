import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, pipe, tap, throwError } from 'rxjs';

@Injectable()
export class LoggingInterceptorService implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(catchError((error) => {
            console.log(error);
            return throwError(() => error);
        }));
	}
}
