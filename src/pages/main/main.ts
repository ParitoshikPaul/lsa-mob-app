import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CategoryService} from '../../providers/category-service';
import { Observable } from "rxjs/Observable";
@Component({
  selector: 'page-about',
  templateUrl: 'main.html',
  providers: [CategoryService]
})
export class MainPage {
  public data: any;
  public categories: any;
  tabBarElement: any;
  category: Observable<any>;
  constructor(public navCtrl: NavController, public categoryservice: CategoryService) {
    this.tabBarElement = document.querySelector('.tabbar');  
    
}
  ionViewDidLoad() {
    this.tabBarElement.style.display = 'inline-flex';
      this.categoryservice.load().subscribe(data=>{
        this.categories = data;
      });
  }
  
  get_categories(){
  }
}
