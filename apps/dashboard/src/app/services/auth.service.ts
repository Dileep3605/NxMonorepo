import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  refreshToken(): Observable<any> {
    return of('refresh-token-from-api');
  }
}
