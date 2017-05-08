import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { LanguageService } from '../../providers/language-service';
import { CountryService } from '../../providers/country-service';
import {FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Locale, LocaleService, LocalizationService } from 'angular2localization';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LanguageService, CountryService], 
})
export class HomePage extends Locale implements OnInit {

 currentLang = 'en';
  language_loc ='English';
  tabBarElement: any;
  splash = true;
  rootPage: any = HomePage;
  public data: any;
  public languages: any;
  public countries: any;
  getstartedform: FormGroup;


  constructor(public navCtrl: NavController, public language: LanguageService, public country: CountryService,  public _form: FormBuilder, public locale: LocaleService,
              public localization: LocalizationService) {
   
    super(locale, localization);
    this.currentLang = locale.getCurrentLanguage();

    this.tabBarElement = document.querySelector('.tabbar');
     this.tabBarElement.style.display = 'none !important';
     this.language.load().subscribe(data=> {
        this.languages = data 
    } );
     
     this.country.load().subscribe(data=> { this.countries = data });

     
  this.getstartedform = this._form.group({
   "country": ["", Validators.required],
   "language": ["", Validators.required]

  });

}
  ngOnInit(){
      //this.changeLocale(this.language);
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
    selectLocale(language_loc: string, country: string, currency: string): void {
    this.locale.setCurrentLocale(language_loc, country);
    this.locale.setCurrentCurrency(currency);
    console.log(language_loc);
    this.currentLang = language_loc;
     console.log(language_loc);
  }

  changeLocale(selectedlanguage: string){
    console.log(selectedlanguage);
      if(selectedlanguage === 'hi'){
          this.selectLocale('hi', 'HI', 'EUR');
      }else if(selectedlanguage === 'arabic'){
          this.selectLocale('ar', 'AR', 'JPY');
      }else{
          this.selectLocale('en', 'US', 'USD');
      }
  }
}