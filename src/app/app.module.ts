import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { HomePage } from '../pages/home/home';
import { BussinessListPage } from '../pages/bussiness_listing/bussiness_listing';
import { BusinessdetailPage } from '../pages/business_detail/business_detail';
import { FeedbackPage } from '../pages/feedback/feedback';
import { NotificationPage } from '../pages/notification/notification';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';
import { header } from '../components/header/header';
import { SearchHeader } from '../components/search_header/search_header';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { Ionic2RatingModule } from 'ionic2-rating';

//Below 2 components are related with localization implementation
import { LocaleModule, LocalizationModule } from 'angular2localization';
import { LocalizeComponent } from '../components/localize/localize';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    HomePage,
    BussinessListPage,
    BusinessdetailPage, 
    FeedbackPage,
    ContactPage,
    SearchPage,
    NotificationPage,
    header,
    SearchHeader,
    TabsPage,
    LocalizeComponent 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CommonModule,
    Ionic2RatingModule ,
    LocaleModule.forRoot(), // New instance of LocaleService.
    LocalizationModule.forRoot() // New instance of LocalizationService.
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage, 
    HomePage,
    BussinessListPage,
    BusinessdetailPage,
    FeedbackPage,
    ContactPage,
    SearchPage,
    NotificationPage,
    header,
    SearchHeader,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
