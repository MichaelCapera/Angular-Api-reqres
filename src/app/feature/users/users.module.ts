import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUserComponent } from './home-user/home-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
    declarations: [
       HomeUserComponent,
       NavBarComponent
      ],

})
export class UsersModule {
}
