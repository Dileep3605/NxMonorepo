import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UtilityService } from '../../services/utility.service';

export const authGuard: CanActivateFn = (route, state) => {
  const utlityService = inject(UtilityService);
  const token = utlityService.getToken();

  if (token) {
    return true;
  }
  return navigate();

  function navigate() {
    const router = inject(Router);
    utlityService.clearStorage();
    router.navigate(['/login']);
    return false;
  }
};
