import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { LanguageService } from '../../providers/language-service';
import { CountryService } from '../../providers/country-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LanguageService, CountryService], 
})
export class HomePage {
  tabBarElement: any;
  splash = true;
  rootPage: any = HomePage;
  public data: any;
  public languages: any;
  public countries: any;
  constructor(public navCtrl: NavController, public language: LanguageService, public country: CountryService) {
    this.tabBarElement = document.querySelector('.tabbar');
     this.tabBarElement.style.display = 'none !important';
     this.language.load().subscribe(data=> {
        this.languages = data 
    } );
     
     this.country.load().subscribe(data=> { this.countries = data });
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
    usemyloc(event){ 
    this.navCtrl.push(MainPage);
  }
}