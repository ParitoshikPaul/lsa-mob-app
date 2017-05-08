import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { Locale, LocaleService, LocalizationService } from 'angular2localization';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public locale: LocaleService, public localization: LocalizationService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
        // Adds the languages (ISO 639 two-letter or three-letter code).
    this.locale.addLanguages(['en', 'hi', 'ar']);

    // Required: default language, country (ISO 3166 two-letter, uppercase code) and expiry (No days). If the expiry is omitted, the cookie becomes a session cookie.
    // Selects the default language and country, regardless of the browser language, to avoid inconsistencies between the language and country.
    this.locale.definePreferredLocale('en', 'US', 30);

    // Optional: default currency (ISO 4217 three-letter code).
    this.locale.definePreferredCurrency('USD');

    // Initializes LocalizationService: asynchronous loading.
    this.localization.translationProvider('../assets/locale-'); // Required: initializes the translation provider with the given path prefix.
    this.localization.updateTranslation(); // Need to update the translation.
  }
  
    // Sets a new locale & currency.
  selectLocale(language: string, country: string, currency: string): void {

    this.locale.setCurrentLocale(language, country);
    this.locale.setCurrentCurrency(currency); 

  }
}
