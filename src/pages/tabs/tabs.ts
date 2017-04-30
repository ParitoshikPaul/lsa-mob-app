import { Component } from '@angular/core';
import { MainPage } from '../main/main';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MainPage;
  tab3Root = ContactPage;
  constructor() {

  }
}
