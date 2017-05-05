import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LanguageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LanguageService {
  constructor(public http: Http) {
  }
  load() {
  return  this.http.get('http://devlsa.paulson.co.in/?q=apiv1/languages')
      .map(res => res.json());
 }
}
