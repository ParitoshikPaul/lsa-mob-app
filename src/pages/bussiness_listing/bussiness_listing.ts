import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform} from 'ionic-angular';
import { BusinessLists } from '../../providers/business-listings';
import { BusinessdetailPage } from '../business_detail/business_detail';
@Component({
  selector: 'page-contact',
  templateUrl: 'bussiness_listing.html',
  providers: [BusinessLists]  
})
export class BussinessListPage {
  public businesslist: any;
  public business_tid: any;
   menu = false;
  constructor(public navCtrl: NavController, public business: BusinessLists, public params: NavParams, public modal: ModalController, public platform: Platform) {
    this.business_tid = this.params.get('buss_tid');
    this.business.load(this.business_tid).subscribe(data=> { this.businesslist = data });
  }
 business_detail(event, nid){ 
    this.navCtrl.push(BusinessdetailPage, { buss_nid: nid });
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
