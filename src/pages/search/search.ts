import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController, Platform} from 'ionic-angular';
import { BusinessLists } from '../../providers/business-listings';
import { BusinessdetailPage } from '../business_detail/business_detail';
@Component({
  selector: 'page-contact',
  templateUrl: 'search.html',
  providers: [BusinessLists]  
})


export class SearchPage {
  searchQuery: string = '';
  items: string[];

  public businesslist: any;
  public business_tid: any;
   menu = false;
   
  constructor(public navCtrl: NavController, public business: BusinessLists, public params: NavParams, public modal: ModalController, public platform: Platform) {
 this.initializeItems();
    this.business.search_nodes().subscribe(data=> { this.businesslist = data });
  }
    initializeItems() {
    this.items = this.businesslist;
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.indexOf(val) > -1);
      })
    }
  }

  business_detail(event, nid){ 
  this.navCtrl.push(BusinessdetailPage, { buss_nid: nid });
  }

  go_back(){
  this.navCtrl.pop();
  }
  ionViewDidEnter() {

  }
    menu_overlay(event){ 
  this.menu = true;
  }
  menu_overlay_close(event){ 
  this.menu = false;
  }
}
