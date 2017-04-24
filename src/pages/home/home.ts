import { Component } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';
import { MainPage } from '../main/main';
import { Geolocation } from '@ionic-native/geolocation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabBarElement: any;
  splash = true;
  rootPage: any = MainPage;
  currentpositing: any;
  constructor(public navCtrl: NavController, public geolocation: Geolocation, private platform: Platform) {
  this.tabBarElement = document.querySelector('.tabbar');
  this.tabBarElement.style.display = 'none !important';
  // get current position
  platform.ready().then(() => {
  geolocation.getCurrentPosition().then(pos => {
  console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
  });
  });
  }
  
  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
    }, 4000);
  }
  get_started(event){
    this.navCtrl.push(MainPage);
  }
}