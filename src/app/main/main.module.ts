import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { PrimeModule } from '../prime/prime.module';
import { ProductListPageComponent } from './pages/product-list/product-list.component';
import { UiModule } from '../ui/ui.module';


@NgModule({
  declarations: [ProductListPageComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimeModule,
    UiModule
  ]
})
export class MainModule { }
