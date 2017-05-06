import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CategoryService} from '../../providers/category-service';
import { BussinessListPage } from '../bussiness_listing/bussiness_listing';
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'page-about',
  templateUrl: 'main.html',
  providers: [CategoryService]
})
export class MainPage {
  menu = false;
  tabcat = "";
  public data: any;
  public categories: any;
  
  public categories_prod: any;
  
  public categories_event: any;
  tabBarElement: any;
  getstartedform: any;
  constructor(public navCtrl: NavController, public categoryservice: CategoryService, public _form: FormBuilder) {
    this.tabcat = "categories";
  this.tabBarElement = document.querySelector('.tabbar');  
    this.categoryservice.load().subscribe(data=>{
    this.categories = data;
     console.log(data);
  });
      this.categoryservice.load_product_cat().subscribe(data2=>{
    this.categories_prod = data2;
    console.log(data2);
  });
      this.categoryservice.load_event_cat().subscribe(data3=>{
    this.categories_event = data3; 
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
