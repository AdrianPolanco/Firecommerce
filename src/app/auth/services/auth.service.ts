import {  Injectable, OnDestroy } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithPopup } from '@firebase/auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private googleProvider = new GoogleAuthProvider();
  errorMessageSubject = new Subject<string>();

  constructor(private auth: Auth, private router: Router) {
    auth.useDeviceLanguage();
    this.googleProvider.addScope(
      'https://www.googleapis.com/auth/userinfo.email'
    );
    this.googleProvider.addScope(
      'https://www.googleapis.com/auth/userinfo.profile'
    );
  }

  async registerWithEmailAndPassword(email: string, password: string) {
    await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async loginWithEmailAndPassword(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(this.auth, email, password);
      if (result.user) this.router.navigate(['fire/products']);
    } catch (error: any) {
      switch (error.code) {
        case 'auth/user-not-found':
          this.errorMessageSubject.next('Usuario no encontrado.');
          break;
        case 'auth/wrong-password':
          this.errorMessageSubject.next('Credenciales incorrectas.');
          break;
        default:
          this.errorMessageSubject.next(
            'Ha ocurrido un error mientras se intentaba iniciar sesión.'
          );
          break;
      }

      this.router.navigate(['']);
    }
  }

  async loginWithGoogle() {
    await signInWithPopup(this.auth, this.googleProvider);
    this.router.navigate(['fire/products']);
  }

  async logout() {
    await this.auth.signOut();
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.errorMessageSubject.complete();
  }
}
