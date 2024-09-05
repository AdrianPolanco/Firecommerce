import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ui-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginPageComponent {

  constructor(private authService: AuthService) { }

  loginWithGoogle() {
    try {
      this.authService.loginWithGoogle();
    } catch (error) {
      console.error(error);
    }
  }
}
