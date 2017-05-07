import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Notification } from '../../providers/notification';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
   providers: [Notification]
})
export class ContactPage {
   menu = false;
   public notificationss: any;
   
  constructor(public navCtrl: NavController , public notification: Notification) {
this.notification.load().subscribe(data=> { this.notificationss = data });
  }

}
