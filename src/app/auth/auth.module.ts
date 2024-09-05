import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login/login.component';
import { PrimeModule } from '../prime/prime.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireAuthModule,
    PrimeModule,
    UiModule
  ]
})
export class AuthModule {}
