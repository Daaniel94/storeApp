import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StoreModule { }
