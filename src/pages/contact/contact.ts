import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contact } from '../../providers/contact';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
   providers: [Contact]
})
export class ContactPage {
   menu = false;
   public contacts: any;
    public content_data: any;
   
  constructor(public navCtrl: NavController , public contact: Contact) {
this.contact.load().subscribe(data=> { this.contacts = data; 
  console.log(data); });

    this.contact.load_contact().subscribe(data2=> { this.content_data = data2; console.log(data2); });
}


 
}
