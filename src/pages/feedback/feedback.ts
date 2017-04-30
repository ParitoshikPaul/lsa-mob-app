import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {
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
