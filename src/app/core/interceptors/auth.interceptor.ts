import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthServiceService } from '../auth/services/auth-service.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthServiceService);
  req = req.clone({
    setHeaders: {
      token: auth.getToken()||"",
    },
  });

  return next(req);
};
