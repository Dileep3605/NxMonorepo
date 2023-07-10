import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { UtilityService } from '../services/utility.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  #utilityService = inject(UtilityService);
  #authService = inject(AuthService);
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const headers: {
      [name: string]: string | string[];
    } = {};

    const token = this.#utilityService.getToken();
    if (token) {
      headers['Access-Token'] = token;
    }
    const req: HttpRequest<unknown> = request.clone({
      setHeaders: headers,
    });
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error?.status === 401 && !request.url.includes('refresh-token')) {
          // If the error is 401 Unauthorized and the request is not a refresh token request
          // Call your authentication service's refresh token method to get a new token
          return this.#authService.refreshToken().pipe(
            switchMap((newToken: string) => {
              // Clone the original request and add the new token
              const authRequest = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${newToken}`,
                },
              });
              // Retry the original request with the new token
              return next.handle(authRequest) as Observable<HttpEvent<unknown>>; // Explicitly specify the return type
            }),
            catchError((refreshError: HttpErrorResponse) => {
              // Handle refresh token error, e.g., logout the user
              return throwError(() => new Error(refreshError.message));
            })
          );
        }
        // For any other error status codes or non-authentication related errors, just throw the error
        return throwError(() => new Error(error.message));
      })
    );
  }
}
