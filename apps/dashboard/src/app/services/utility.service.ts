import { Injectable, inject } from '@angular/core';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  #storageService = inject(StorageService);
  #router = inject(Router);

  getToken() {
    return this.#storageService.getLocalStorage('token');
  }

  logout() {
    this.#storageService.clearLocalStorage();
    this.#router.navigate(['/']);
  }

  clearStorage() {
    this.#storageService.clearLocalStorage();
  }
}
