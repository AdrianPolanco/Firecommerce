import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'main-products-list-page',
  templateUrl: './product-list.component.html',
  styles: ``,
})
export class ProductListPageComponent {
  constructor(private authService: AuthService) {}

  async logout() {
    await this.authService.logout();
  }
}
