import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { BussinessListPage } from '../pages/bussiness_listing/bussiness_listing';
import { BusinessdetailPage } from '../pages/business_detail/business_detail';
import { ProductdetailPage } from '../pages/product_detail/product_detail';
import { FeedbackPage } from '../pages/feedback/feedback';
import { TabsPage } from '../pages/tabs/tabs';
import { NavigationMenu } from '../pages/menu/menu';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    ContactPage,
    HomePage,
    BussinessListPage,
    BusinessdetailPage,
    ProductdetailPage,
    FeedbackPage,
    NavigationMenu,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CommonModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule // Put ionic2-rating module here
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage, 
    ContactPage,
    HomePage,
    BussinessListPage,
    BusinessdetailPage,
    ProductdetailPage,
    FeedbackPage,
    NavigationMenu,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
