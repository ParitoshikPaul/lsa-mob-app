import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabBarElement: any;
  splash = true;
  rootPage: any = MainPage;
  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar');
     this.tabBarElement.style.display = 'none !important';
  }
  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
    }, 4000);
  }
  get_started(event){
    alert('Nailed it');
    this.navCtrl.push(MainPage);
  }
}