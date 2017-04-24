import { Component } from '@angular/core';

import { MainPage } from '../main/main';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { BussinessListPage } from '../bussiness_listing/bussiness_listing';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BussinessListPage;
  tab2Root = MainPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
