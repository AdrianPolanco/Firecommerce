import { inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';

export const publicGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(AngularFireAuth);

  return auth.authState.pipe(
    map(user => {
      if(user) {
        router.navigate(['fire/products']);
        return false;
      }
      return true;
    })
  )
};
