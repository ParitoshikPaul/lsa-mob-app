import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import { BusinessLists } from '../../providers/business-listings';

@Component({
  selector: 'page-bussiness-detail',
  templateUrl: 'business_detail.html',
  providers: [BusinessLists]  
})
export class BusinessdetailPage {
      tabdet = "";
      public businessdetail: any;
      public productlist:any;
      public product_nid: any;
      public eventlist:any;
      public event_nid: any;
      public business_nid: any;
      public commentlist:any;
      public title: any;

  constructor(private _app: App, public navCtrl: NavController, public params: NavParams, public business: BusinessLists,) {
 
    this.tabdet = "details";
    this.title = "Business Details";
        this.business_nid = this.params.get('buss_nid');
    this.business.load_detail(this.business_nid).subscribe(data=> {
    this.businessdetail = data 
  //  console.log(data);
    });
  
    this.product_nid = this.params.get('buss_nid');
    this.business.load_product(this.product_nid).subscribe(data=> { this.productlist = data });

    this.event_nid = this.params.get('buss_nid');
    this.business.load_event(this.event_nid).subscribe(data=> { this.eventlist = data });
    
    this.business_nid = this.params.get('buss_nid');
    this.business.load_comment(this.business_nid).subscribe(data=> { this.commentlist = data });
     }

    feedback_page(event){ 
      this.navCtrl.push(FeedbackPage);
    }

    product_detail(event, nid){ 
      this.navCtrl.push(BusinessdetailPage, { buss_nid: nid });
    }
    ionViewDidEnter() {
        this._app.setTitle(this.title + " - App Name");
    }
  }
