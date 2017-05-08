import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../../pages/contact/contact';
import { SearchPage } from '../../pages/search/search';

@Component({
  selector: 'header-search',
  templateUrl: 'search_header.html'
})
export class SearchHeader {

 menu = false;

  constructor(public navCtrl: NavController) {
  }
    menu_overlay(event){ 
    this.menu = true;
    }

    menu_overlay_close(event){ 
    this.menu = false;
    }
    go_back(){
    this.navCtrl.pop();
    }
    contact($event){
    this.navCtrl.push(ContactPage);
}
    searchpage($event){
    this.navCtrl.push(SearchPage);
}
}
