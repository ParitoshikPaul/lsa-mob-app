/**
 * Created by atinamit on 12/21/16.
 */
import {Component , OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import { Locale, LocaleService, LocalizationService } from 'angular2localization';

@Component({
  selector: 'locale-switch',
  template: `
         <select class="large13-large15 small10-small12 mobil-hide" name="internationalization" [(ngModel)]="language" (ngModelChange)="changeLocale(language)">
         <option>English</option>
         <option>Español</option>
         <option>日本</option>
         </select>
	    `,
  providers: [NgIf]
})

export class LocalizeComponent extends Locale implements OnInit{

  currentLang = 'en';
  language ='English';

  constructor(public locale: LocaleService,
              public localization: LocalizationService) {
    super(locale, localization);
    this.currentLang = locale.getCurrentLanguage();
  }

  ngOnInit(){
      //this.changeLocale(this.language);
  }

  selectLocale(language: string, country: string, currency: string): void {
    this.locale.setCurrentLocale(language, country);
    this.locale.setCurrentCurrency(currency);
    this.currentLang = language;
  }

  changeLocale(selectedlanguage: string){
      if(selectedlanguage === 'Español'){
          this.selectLocale('es', 'ES', 'EUR');
      }else if(selectedlanguage === '日本'){
          this.selectLocale('ja', 'JP', 'JPY');
      }else{
          this.selectLocale('en', 'US', 'USD');
      }
  }
}
