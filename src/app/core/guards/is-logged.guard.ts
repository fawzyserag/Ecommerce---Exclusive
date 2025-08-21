import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../auth/services/auth-service.service';
import { inject } from '@angular/core';

export const isLoggedGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthServiceService);
    const router = inject(Router);
    if (authService.isAuthenticated()) {
      router.navigate(['/home']);
      return false;
    }

    return true;
};
