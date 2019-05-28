import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/servicios/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public correo: string;
  public password: string;

  constructor(private auth: AuthService,
    public router: Router) { }

  ngOnInit() {
  }

  OnSubmitRegister(){
    this.auth.register(this.correo, this.password).then(auth => {
      
       alert('Usuario Registrado Correctamente');
    }).catch(err => alert('Este usuario ya existe y/o Ingrese sus credenciales')) 
  }
}

