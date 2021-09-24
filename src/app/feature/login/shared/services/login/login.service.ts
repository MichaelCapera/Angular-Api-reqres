import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Ilogin } from 'src/app/interfaces/ilogin';


@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http:HttpClient){}

  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login(data:Ilogin) {

    return this.http.post(environment.Login,data);
  }
}
