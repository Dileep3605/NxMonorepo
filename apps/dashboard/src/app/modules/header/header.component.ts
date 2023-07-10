import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { UtilityService } from '../../services/utility.service';
import { ReduxService } from '../../services/redux.service';

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
  reduxService = inject(ReduxService);

  ngOnInit(): void {
    const token = this.#utilityService.getToken();
    if (token) {
      this.isUserLoggedIn = true;
      return;
    }
    this.isUserLoggedIn = false;

    // State change in the current app
    this.reduxService.globalStore.SubscribeToGlobalState('LoginApp', () => {
      const token =
        this.reduxService.globalStore.GetGlobalState()?.LoginApp?.authToken; //The global state has a separate attribute for all the apps registered in the store
      if (token || token === null) this.afterLoginMenus(token);
    });
  }

  /**
   * Show hide before and after login menus
   * @param token
   */
  afterLoginMenus(token: string | null): void {
    if (token === null) {
      this.isUserLoggedIn = false;
      return;
    }
    this.isUserLoggedIn = true;
  }

  /**
   * Logout from the site
   */
  logout() {
    this.isUserLoggedIn = false;
    this.#utilityService.logout();
  }

  signupRoute() {
    this.#router.navigate(['/signup']);
  }

  loginRoute() {
    this.#router.navigate(['/login']);
  }

  aboutUs() {
    this.#router.navigate(['/react-remote']);
  }
}
