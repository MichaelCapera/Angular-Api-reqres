import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';

<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login/login.component';



@NgModule({
  declarations: [LoginComponent],
  exports:[],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule
=======

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule
>>>>>>> e69c5c8bb51399f2643d6162356069c6ede5c6ac
  ]
})
export class FeatureModule { }
