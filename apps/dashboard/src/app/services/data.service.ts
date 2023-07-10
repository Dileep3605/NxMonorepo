import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private http: HttpClient,
    private utilityService: UtilityService,
    private router: Router
  ) {}

  /**
   * Get module-federation.manifest file
   * @returns
   */
  getMfeManifestJson(): Observable<object> {
    const url = `assets/module-federation.manifest.json`;
    return this.http.get<object>(url);
  }
}
