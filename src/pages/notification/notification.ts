import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Notification } from '../../providers/notification';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
   providers: [Notification]
})
export class NotificationPage {
   menu = false;
   public notifications_data: any;
   
  constructor(public navCtrl: NavController , public notification: Notification) {
this.notification.load().subscribe(data=> { this.notifications_data = data });
  } 
   
}
