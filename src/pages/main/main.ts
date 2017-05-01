import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CategoryService} from '../../providers/category-service';
import { Observable } from "rxjs/Observable";
import { BussinessListPage } from '../bussiness_listing/bussiness_listing';
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
  tabBarElement: any;
  constructor(public navCtrl: NavController, public categoryservice: CategoryService) {
    this.tabcat = "categories";
  this.tabBarElement = document.querySelector('.tabbar');  
    this.categoryservice.load().subscribe(data=>{
    this.categories = data;
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
