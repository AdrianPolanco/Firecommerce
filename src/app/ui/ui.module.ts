import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeModule } from '../prime/prime.module';
import { UiGoogleButtonComponent } from './ui-google-button/ui-google-button.component';


@NgModule({
  declarations: [
    UiGoogleButtonComponent
  ],
  imports: [
    CommonModule,
    PrimeModule
  ],
  exports: [
    UiGoogleButtonComponent
  ]
})
export class UiModule { }
