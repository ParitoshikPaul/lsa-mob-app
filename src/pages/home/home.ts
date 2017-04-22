import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabBarElement: any;
  splash = true;
  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar');
     this.tabBarElement.style.display = 'none !important';
  }
  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
    }, 3000);
  }
}