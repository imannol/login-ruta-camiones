import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/servicios/auth.service';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

   public email: string;
   public pass: string;
   public fGroup: FormGroup;

  constructor(private authService: AuthService,
     public router: Router,
     private fBuilder: FormBuilder) { 
       this.fGroup = this.fBuilder.group({
         'email': [this.email, Validators.compose([
           Validators.required
         ])],
         'pass': [this.pass, Validators.compose([
           Validators.required
         ])]
       })
     }

  ngOnInit() {
  }
  
  OnSubmitLogin()
  {
   this.authService.login(this.email, this.pass).then(res => {
     this.router.navigate(['home'])
   }).catch(err => alert('Datos Incorrectos / Campos vacios'))
   }
}
