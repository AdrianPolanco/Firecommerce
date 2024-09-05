import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authenticationGuard } from './auth/guards/authentication.guard';
import { publicGuard } from './auth/guards/public.guard';

const routes: Routes = [
  { path: "", loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule), canActivate: [publicGuard] },
  { path: "fire", loadChildren: () => import("./main/main.module").then(m => m.MainModule), canMatch: [authenticationGuard]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
