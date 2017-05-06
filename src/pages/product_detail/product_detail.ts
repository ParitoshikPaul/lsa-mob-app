import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import { BusinessLists } from '../../providers/business-listings';

@Component({
  selector: 'page-product-detail',
  templateUrl: 'product_detail.html',
  providers: [BusinessLists]  
})
export class ProductdetailPage {

      menu = false;
      public productlist:any;
      public product_nid: any;
     
      public business_nid: any;

  constructor(public navCtrl: NavController, public params: NavParams, public business: BusinessLists,) {

    this.product_nid = this.params.get('buss_nid');
    this.business.load_product(this.product_nid).subscribe(data=> { this.productlist = data });
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
