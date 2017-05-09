import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CategoryService} from '../../providers/category-service';
import { BussinessListPage } from '../bussiness_listing/bussiness_listing';
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'page-sub-cat',
  templateUrl: 'subcategories.html',
  providers: [CategoryService]
})
export class SubcategoryPage {
  menu = false;
  tabcat = "";
  public data: any;
  public categories: any;
  
  public categories_prod: any;
  
  public categories_event: any;
  tabBarElement: any;
  getstartedform: any;
  public business_tid: any;
  constructor(public navCtrl: NavController, public categoryservice: CategoryService, public _form: FormBuilder, public params: NavParams) {
    this.tabcat = "categories";
     this.business_tid = this.params.get('buss_tid');
  this.tabBarElement = document.querySelector('.tabbar');  
    this.categoryservice.load_sub_cat(this.business_tid).subscribe(data=>{
    this.categories = data;
  //   console.log(data);
  });
 
  }
  ionViewDidLoad() {
  this.tabBarElement.style.display = 'inline-flex';
  }
  bussiness_list(event, tid){ 
    this.navCtrl.push(BussinessListPage, { buss_tid: tid });
  }
  menu_overlay(event){ 
    this.menu = true;
  }
  menu_overlay_close(event){ 
    this.menu = false;
  }

}
