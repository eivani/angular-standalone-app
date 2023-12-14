import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { BlogService } from './services/blog.service';
import { tap } from 'rxjs';

export const blogGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(BlogService)
  return service.isAvailable().pipe(
    tap((value) => {
      return !value ? router.navigate(['/']) : true
    }
  ))
};
