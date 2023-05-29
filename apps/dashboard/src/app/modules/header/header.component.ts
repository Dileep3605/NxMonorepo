import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'nx-angular-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  #utilityService = inject(UtilityService);
  #router = inject(Router);
  isUserLoggedIn = false;

  ngOnInit(): void {
    const token = this.#utilityService.getToken();
    if (token) {
      this.isUserLoggedIn = true;
      return;
    }
    this.isUserLoggedIn = false;
  }

  /**
   * Logout from the site
   */
  logout() {
    this.#utilityService.logout();
  }

  signupRoute() {
    this.#router.navigate(['/signup']);
  }

  loginRoute() {
    this.#router.navigate(['/login']);
  }
}
