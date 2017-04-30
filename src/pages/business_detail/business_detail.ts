import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';

@Component({
  selector: 'page-bussiness-detail',
  templateUrl: 'business_detail.html'
})
export class BusinessdetailPage {
  menu = false;
  tabdet = "";
  constructor(public navCtrl: NavController) {
      this.tabdet = "details";
      }
    feedback_page(event){ 
      this.navCtrl.push(FeedbackPage);
    }
    menu_overlay(event){ 
      this.menu = true;
    }
    menu_overlay_close(event){ 
      this.menu = false;
    }
  }
