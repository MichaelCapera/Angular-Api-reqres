import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Ilogin } from 'src/app/interfaces/ilogin';

=======
>>>>>>> e69c5c8bb51399f2643d6162356069c6ede5c6ac

@Injectable({
  providedIn: 'root',
})
export class LoginService {

<<<<<<< HEAD
  constructor(private http:HttpClient){}

  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login(data:Ilogin) {

    return this.http.post(environment.Login,data);
=======
  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login() {
>>>>>>> e69c5c8bb51399f2643d6162356069c6ede5c6ac
  }
}
