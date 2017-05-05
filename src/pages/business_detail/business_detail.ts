import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import { BusinessLists } from '../../providers/business-listings';

@Component({
  selector: 'page-bussiness-detail',
  templateUrl: 'business_detail.html',
  providers: [BusinessLists]  
})
export class BusinessdetailPage {
  menu = false;
  tabdet = "";
  public businessdetail: any;
  public productlist:any;
  public product_nid: any;
  public eventlist:any;
  public event_nid: any;
  public business_nid: any;
  constructor(public navCtrl: NavController, public params: NavParams, public business: BusinessLists,) {
      this.tabdet = "details";
       this.business_nid = this.params.get('buss_nid');
      this.business.load_detail(this.business_nid).subscribe(data=> {
         this.businessdetail = data 
      });
        this.tabdet = "product";
      this.product_nid = this.params.get('buss_nid');
    this.business.load_product(this.product_nid).subscribe(data=> { this.productlist = data });

      this.tabdet = "events";
      this.event_nid = this.params.get('buss_nid');
    this.business.load_event(this.event_nid).subscribe(data=> { this.eventlist = data });

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
    go_back(){
    this.navCtrl.pop();
    }
  }
