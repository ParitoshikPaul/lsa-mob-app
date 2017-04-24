import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BusinessdetailPage } from '../business_detail/business_detail';
@Component({
  selector: 'page-contact',
  templateUrl: 'bussiness_listing.html'
})
export class BussinessListPage {

  constructor(public navCtrl: NavController) {

  }
 business_detail(event){ 
    this.navCtrl.push(BusinessdetailPage);
  }
}
