import { Component } from '@angular/core';
import { MainPage } from '../main/main';
import { NotificationPage } from '../notification/notification';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = MainPage;
  tab3Root = NotificationPage;
  constructor() {
  }
}
