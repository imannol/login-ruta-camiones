import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public authservice: AuthService,
    public actionSheetController: ActionSheetController){}


  Onlogout(){
 this.authservice.logout();
  }

  async presentActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
       text: 'Desconectar',
       role: 'Destructive',
       icon: 'log-out',
       handler: ()=>{
         this.Onlogout()
       },
      }]
    });
  await actionSheet.present();
}
}
