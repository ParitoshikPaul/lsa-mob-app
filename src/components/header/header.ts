import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../../pages/contact/contact';
import { TeamPage } from '../../pages/team/team';

@Component({
  selector: 'header-section',
  templateUrl: 'header.html'
})
export class header {

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
  team($event){
    this.navCtrl.push(TeamPage);
    }
}
