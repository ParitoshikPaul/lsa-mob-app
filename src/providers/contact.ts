import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CountryService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Contact {

  constructor(public http: Http) {
  }
 load() {
  return  this.http.get('http://devlsa.paulson.co.in/?q=apiv1/contact')
      .map(res => res.json());
     
 }
  load_contact() {
  return  this.http.get('http://devlsa.paulson.co.in/?q=apiv1/content/44')
      .map(res => res.json());
     
 }
}