import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
   menu = false;
  constructor(public navCtrl: NavController) {

  }
  menu_overlay(event){ 
    this.menu = true;
  }
  menu_overlay_close(event){ 
    this.menu = false;
  }
}
