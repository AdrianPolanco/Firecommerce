import { inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanMatchFn, Router } from '@angular/router';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export const authenticationGuard: CanMatchFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(AngularFireAuth);

  return auth.authState.pipe(
    map(user => {
      if (!user) {
        router.navigate(['']);
        return false;
      }
      return true;
    }),
    catchError(() => {
      router.navigate(['']);
      return of(false);
    })
  )
}
