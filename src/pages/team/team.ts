import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { Team } from '../../providers/team';

@Component({
  selector: 'team-member',
  templateUrl: 'team.html',
 providers: [Team]
})
export class TeamPage {
      menu = false;
      tabdet = "";
   public team_datas: any;
   
  constructor(private _app: App, public navCtrl: NavController, public params: NavParams , public team:Team) {
this.team.load().subscribe(data=> { this.team_datas = data });
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
}

