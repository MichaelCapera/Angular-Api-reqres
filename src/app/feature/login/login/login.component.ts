import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import {  FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../login/shared/services/login/login.service';
import { Ilogin } from 'src/app/interfaces/ilogin';
// import { Alerts } from 'src/app/helpers/alerts';
import Swal, { SweetAlertIcon } from 'sweetalert2';


=======
>>>>>>> e69c5c8bb51399f2643d6162356069c6ede5c6ac

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{

<<<<<<< HEAD
  public f = this.form.group({
    login__email:['',[Validators.required, Validators.email]],
    login__password:['',[Validators.required]]
  })

  subForm:boolean = false;
  invalidFeedbackEmail:boolean = false;
  invalidFeedbackPassword:boolean = false;

  constructor(
    private readonly router: Router,
    private loginService:LoginService,
    private form:FormBuilder
  ) {
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log("module active");
  }

  login(){

    this.subForm = true;

    if(this.f.invalid){
      return
    }

    const data: Ilogin = {

      email: this.f.controls.login__email.value,
      password: this.f.controls.login__password.value,
    }

    this.loginService.login(data)
    .subscribe(
    (resp)=>{
      
      console.log('resp :>> ', resp);

    },
    
    (err)=>{
    
      Swal.fire({
        title: 'Error',
        text: "User not found",
        icon: 'error',
        confirmButtonColor: '#009900',
        confirmButtonText: 'Ok'
      })
     }
    );

    //console.log('data :>> ', this.loginService.login(data));
  
 }

 invalidField(field:string){
    this.invalidFeedbackEmail = false;
    this.invalidFeedbackPassword= false;

    if(this.subForm && this.f.controls[field].invalid){

      if(field == "login__email"){
     
        this.invalidFeedbackEmail = true;

              
      }else{

        this.invalidFeedbackPassword = true;

      }
     }
    }



=======
  constructor(
    private readonly router: Router,
  ) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

>>>>>>> e69c5c8bb51399f2643d6162356069c6ede5c6ac


  /**
   * Este método no se puede modificar
   * */
<<<<<<< HEAD
  // public redirectUsers(): void {
  //   this.router.navigateByUrl('/users/list');
  // }
=======
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
>>>>>>> e69c5c8bb51399f2643d6162356069c6ede5c6ac

}
