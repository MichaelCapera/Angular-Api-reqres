import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TokenGuard implements CanActivate {

  constructor(private router:Router,
              private http:HttpClient){}
  
  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot):  Promise<boolean>  {

     return new Promise(resolve =>{

      if(localStorage.getItem('token') != null){

        let token = localStorage.getItem("token");

        let data = {
          email: "eve.holt@reqres.in",
          password: "cityslicka"
        }

        this.http.post(environment.Login, data).subscribe(

          resp =>{

            if(resp["token"] == token){

              resolve(true);

            }else{

              this.router.navigateByUrl("login");

              localStorage.removeItem("token");

              resolve(false);
            }

           

          }, err=>{

            this.router.navigateByUrl("login");

              localStorage.removeItem("token");

              resolve(false);

          }
        );

       }else{

        this.router.navigateByUrl("login");

        resolve(false);

      }
      
     })
    // throw new Error('Method not implemented.');
  }
  
  
}
