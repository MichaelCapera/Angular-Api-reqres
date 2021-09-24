import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login/login.component';



@NgModule({
  declarations: [LoginComponent],
  exports:[],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule
  ]
})
export class FeatureModule { }
