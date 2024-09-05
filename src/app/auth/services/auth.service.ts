import { inject, Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithPopup } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  googleProvider = new GoogleAuthProvider();
  constructor(private auth: Auth, private router: Router) {
    auth.useDeviceLanguage()
    this.googleProvider.addScope("https://www.googleapis.com/auth/userinfo.email")
    this.googleProvider.addScope("https://www.googleapis.com/auth/userinfo.profile")
  }

  async loginWithGoogle() {
    await signInWithPopup(this.auth, this.googleProvider);
    this.router.navigate(["fire/products"]);
  }

  async logout() {
    await this.auth.signOut();
    this.router.navigate([""]);
  }
}
