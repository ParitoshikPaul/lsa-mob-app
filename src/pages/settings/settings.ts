import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
//import { Notification } from '../../providers/notification';

@Component({
  selector: 'settings-notification',
  templateUrl: 'settings.html',
  // providers: [Settings]
})
export class SettingsPage {
      menu = false;
      tabdet = "";
   public settings_data: any;
   
  constructor(private _app: App, public navCtrl: NavController, public params: NavParams) {
//this.notification.load().subscribe(data=> { this.notifications_data = data });
  } 
     menu_overlay(event){ 
      this.menu = true;
    }

    menu_overlay_close(event){ 
      this.menu = false;
    }

    go_back(){
    this.navCtrl.pop();
  }
}
