import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  tabBarElement: any;
  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar');
  }
  ionViewDidLoad() {
    this.tabBarElement.style.display = 'inline-flex';
  }
}
