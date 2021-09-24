import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUserComponent } from './users/home-user/home-user.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login/login.component';
=======
>>>>>>> e69c5c8bb51399f2643d6162356069c6ede5c6ac
import { TokenGuard } from '@core/guard/token/token.guard';

const routes: Routes = [
  {
    path: 'users',
    component: HomeUserComponent,
<<<<<<< HEAD
    //canActivate: [TokenGuard],
    loadChildren: () => import('./users/users.module').then(i => i.UsersModule),
  }, {
    path: 'login',
    component: LoginComponent,
=======
    canActivate: [TokenGuard],
    loadChildren: () => import('./users/users.module').then(i => i.UsersModule),
  }, {
    path: 'login',
>>>>>>> e69c5c8bb51399f2643d6162356069c6ede5c6ac
    loadChildren: () => import('./login/login.module').then(i => i.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {
}
